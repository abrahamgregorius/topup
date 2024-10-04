/** @format */

import { Link } from "react-router-dom";

import documentIcon from "@/assets/Iconly/Curved/Bold/Document.svg";
import thumbnail from "@/assets/thumbnail.svg";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const Register = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 min-h-screen">
      {/* Login left */}
      <div className="login-left flex justify-center flex-col items-center">
        {/* Login left container */}
        <div className="container w-full py-12 max-w-[500px] flex flex-col gap-10">
          {/* Login left head */}
          <div className="left-head flex flex-col gap-2">
            <span className="lh-head flex flex-row gap-2">
              <h2 className="text-3xl font-semibold">Daftar</h2>
              <img src={documentIcon} alt="" />
            </span>
            <span className="lh-body font-thin text-md">
              Masukkan informasi pendaftaran dengan benar.
            </span>
          </div>

          {/* Login left body */}
          <div className="left-body">
            <div className="form flex flex-col gap-5">
              <div className="form-control-group grid grid-cols-2 gap-3">
                <div className="form-control flex flex-col gap-2">
                  <label htmlFor="fullname" className="">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="fullname"
                    placeholder="Masukkan nama lengkap"
                    className={`px-5 py-2 rounded-2xl bg-[#1D1F21]`}
                  />
                </div>
                <div className="form-control flex flex-col gap-2">
                  <label htmlFor="username" className="">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    placeholder="Masukkan username"
                    className={`px-5 py-2 rounded-2xl bg-[#1D1F21]`}
                  />
                </div>
              </div>
              <div className="form-control flex flex-col gap-2">
                <label htmlFor="email" className="">
                  Alamat Email
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="Masukkan alamat email"
                  className={`px-5 py-2 rounded-2xl bg-[#1D1F21]`}
                />
              </div>
              <div className="form-control flex flex-col gap-2">
                <label htmlFor="phone" className="">
                  Nomor Whatsapp
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Masukkan nomor whatsapp"
                  className={`px-5 py-2 rounded-2xl bg-[#1D1F21]`}
                />
              </div>
              <div className="form-control-group grid grid-cols-2 gap-3">
                <div className="form-control flex flex-col gap-2">
                  <label htmlFor="password" className="">
                    Kata sandi
                  </label>
                  <input
                    type="text"
                    id="password"
                    placeholder="Buat kata sandi"
                    className={`px-5 py-2 rounded-2xl bg-[#1D1F21]`}
                  />
                </div>
                <div className="form-control flex flex-col gap-2">
                  <label htmlFor="password" className="">
                    Konfirmasi kata sandi
                  </label>
                  <input
                    type="text"
                    id="password"
                    placeholder="Konfirmasi kata sandi"
                    className={`px-5 py-2 rounded-2xl bg-[#1D1F21]`}
                  />
                </div>
              </div>
              <div className="form-control-group w-full flex items-start flex-row justify-between">
                <div className="form-control flex gap-2">
                  {/* <input id='remember-me' type="checkbox" className="bg-green-500 h-5 w-5 text-green-500 rounded border-gray-300 focus:ring-green-500" /> */}
                  <Checkbox
                    id="remember-me"
                    className={`h-5 w-5 rounded border-[#D0FD00]`}></Checkbox>
                  <label htmlFor="remember-me" className="text-sm">
                    Saya setuju dengan{" "}
                    <Link to="#" className="text-[#D0FD00]">
                      Syarat dan Ketentuan
                    </Link>{" "}
                    dan{" "}
                    <Link to="#" className="text-[#D0FD00]">
                      Kebijakan Pribadi
                    </Link>
                  </label>
                </div>
              </div>
            </div>

            <Button className="mt-9 w-full bg-[#D0FD00] rounded-3xl font-semibold text-lg py-6 text-[#0C0D0D] hover:text-[#D0FD00]">
              Masuk
            </Button>

            <div className="flex justify-center mt-5">
              <span>
                Sudah punya akun Top Up?{" "}
                <Link to="/login" className="text-[#D0FD00] font-semibold text-sm">
                  Login disini
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="login-right">
        <img
          src={thumbnail}
          className="object-cover object-left h-full"
          alt=""
        />
      </div>
    </div>
  );
};

export default Register;
