import { FaGithubAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div>
      <div
        className="hero bg-slate-300 min-h-screen "
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
                  required
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
                  required
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
                <button className="btn ">
                  Login with <FcGoogle />{" "}
                </button>
                <button className="btn ">
                  Login with <FaGithubAlt />{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
