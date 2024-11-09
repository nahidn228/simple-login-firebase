import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import { FaGithubAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../firebase/firebase.init";

const Login = () => {
  const [user, setUser] = useState(null);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log("ERROR:", error);
        setUser(null);
      });
  };

  const handleGoogleSignOut = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => console.log("Sign Out done"))
      .catch((error) => console.log("ERROR :", error));
    setUser(null);
  };

  const handleGithubSignIn = (e) => {
    e.preventDefault();

    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log("ERROR", error);
        setUser(null);
      });
  };
  return (
    <div>
      <div
        className="hero bg-slate-300 min-h-screen flex flex-col lg:flex-row justify-center gap-8"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/c1yH7NL/b.jpg)",
        }}
      >
        <div className="hero-content ">
          <div className="card  backdrop-blur-sm bg-white/30 w-full max-w-sm shrink-0 shadow-2xl p-4">
            <h1 className="font-bold text-xl text-center">Simple Login</h1>
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  //   required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  //   required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div className="flex gap-4">
                {user ? (
                  <button onClick={handleGoogleSignOut} className="btn ">
                    Log Out
                  </button>
                ) : (
                  <button onClick={handleGoogleSignIn} className="btn ">
                    Login with <FcGoogle />{" "}
                  </button>
                )}

                <button onClick={handleGithubSignIn} className="btn ">
                  Login with <FaGithubAlt />{" "}
                </button>
              </div>
            </form>
          </div>
        </div>

        {user && (
          <div className="card  backdrop-blur-sm bg-white/30 w-full max-w-sm shrink-0 shadow-2xl p-4">
            <h4>Name: {user?.displayName} </h4>
            <h4>Email: {user?.email} </h4>
            <p>
              <img src={user?.photoURL} alt="" />
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
