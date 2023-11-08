import { initializeApp } from "firebase/app";
import { auth } from "firebase/auth";
import firebaseui from "firebaseui";

// Your web app's Firebase configuration
const firebaseConfig = {
  // ここにFirebaseの設定を追加
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get the Authentication service
const authService = auth(app);

// FirebaseUI Auth のインスタンスを作成する
const ui = new firebaseui.auth.AuthUI(firebase.auth());

// Firebase プロジェクトの設定で行った認証プロバイダの設定を反映する

// 例：Googleログインの設定
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.addScope('profile');
googleAuthProvider.addScope('email');
firebase.auth().useDeviceLanguage();

ui.start('#firebaseui-auth-container', {
  signInOptions: [
    googleAuthProvider,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ]
});
