import thumbnail from '@/assets/thumbnail.svg'
import loginIcon from '@/assets/Iconly/Curved/Bold/Login.svg'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'

const Login = () => {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 min-h-screen">
        {/* Login left */}
        <div className="login-left flex justify-center flex-col items-center">
            
            {/* Login left container */}
            <div className="container w-full max-w-[500px] flex flex-col gap-10">

                {/* Login left head */}
                <div className="left-head flex flex-col gap-2">
                    <span className="lh-head flex flex-row gap-2">
                        <h2 className="text-3xl font-semibold">Masuk</h2> 
                        <img src={loginIcon} alt="" />
                    </span>
                    <span className="lh-body font-thin text-md">
                        Masukkan informasi dengan benar dan tepat.
                    </span>
                </div>

                {/* Login left body */}
                <div className="left-body">
                    <div className="form flex flex-col gap-5">
                        <div className="form-control flex flex-col gap-2">
                            <label htmlFor="username" className=''>Username</label>
                            <input type="text" id='username' placeholder='Masukkan username' className={`px-5 py-2 rounded-2xl bg-[#1D1F21]`} />
                        </div>
                        <div className="form-control flex flex-col gap-2">
                            <label htmlFor="password" className=''>Kata sandi</label>
                            <input type="text" id='password' placeholder='Masukkan kata sandi' className={`px-5 py-2 rounded-2xl bg-[#1D1F21]`} />
                        </div>
                        <div className="form-control-group w-full flex items-start flex-row justify-between">
                            <div className="form-control flex gap-2">
                                {/* <input id='remember-me' type="checkbox" className="bg-green-500 h-5 w-5 text-green-500 rounded border-gray-300 focus:ring-green-500" /> */}
                                <Checkbox id="remember-me" className={`h-5 w-5 rounded border-[#D0FD00]`}></Checkbox>
                                <label htmlFor="remember-me">Ingat Aku</label>
                            </div>
                            <div className="form-control flex gap-2">
                                <Link to="#" className="text-[#D0FD00] font-semibold text-sm">Lupa Kata Sandi?</Link>
                            </div>
                        </div>
                    </div>

                    <Button className="mt-9 w-full bg-[#D0FD00] rounded-3xl font-semibold text-lg py-6 text-[#0C0D0D] hover:text-[#D0FD00]" >Masuk</Button>
                    

                    <div className="flex justify-center mt-5">
                        <span>Belum punya akun Top Up? <Link to="/register" className="text-[#D0FD00] font-semibold text-sm">Daftar disini</Link></span>
                    </div>
                </div>
            </div>
        </div>
        <div className="login-right">
            <img src={thumbnail} className='object-cover object-left h-full' alt="" />
        </div>

    </div>

    )
}

export default Login 