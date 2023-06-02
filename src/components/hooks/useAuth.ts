import { useEffect, useState } from "react";
import supabase from "../../lib/supabase";
import { Session } from "@supabase/supabase-js";

const useAuth = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const { data: authData } = supabase.auth.onAuthStateChange((_, session) => {
      setSession(session);
    });

    // リスナーの削除
    return () => authData.subscription.unsubscribe();
  }, []);

  const signInWithGithub = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "github",
      });
      if (error) {
        setError(error.message);
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else if (typeof error === "string") {
        setError(error);
      } else {
        console.log("Githubとの連携に失敗しました");
      }
    }
  };

  // ログインユーザーのプロフィール取得: Github
  const profileFromGithub: {
    nickName: string;
    avatarUrl: string;
  } = {
    nickName: session?.user?.user_metadata.user_name,
    avatarUrl: session?.user?.user_metadata.avatar_url,
  };

  // サインアウト
  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return {
    session,
    error,
    profileFromGithub,
    signInWithGithub,
    signOut,
  };
};

export default useAuth;
