// src/components/Register.js
import React, {useEffect, useRef, useState} from 'react';

export const SignUpPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [type, setType] = useState('student');



    const [showPwd, setShowPwd] = useState(false)
    const [showRepeatPwd, setShowRepeatPwd] = useState(false)

    const emailRef = useRef();

    useEffect(() => {
        emailRef.current.focus();
    }, [])

    const setStudent = () => {
        setType('');
    }

    const  setTeacher = () =>{
        setType('teacher')
    }

    const showPassport = () => {
        setShowPwd(!showPwd)
    }

    const showRepeatPassport = () => {
        setShowRepeatPwd(!showRepeatPwd)
    }

    // const handleRegistration = async () => {
    //     try {
    //         const response = await axios.post('/api/register', {
    //             username,
    //             password,
    //         });
    //
    //         // Handle successful registration here, e.g., show a success message
    //     } catch (error) {
    //         // Handle registration error, e.g., show an error message
    //         console.error('Registration failed:', error);
    //     }
    // };


    return (
        <div className="bg-grey-lighter min-h-screen flex flex-auto">
            <div className="container 3xl:max-w-lg xl:max-w-md md:max-w-sm sm:max-w-xs mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded-2xl shadow-md text-black w-full">
                    <div className="flex justify-between">
                        <p className="flex-initial text-xl font-bold">{`<`}</p>
                        <h1 className="flex-1 mb-5 text-2xl text-center mr-5">Регистрация</h1>
                    </div>
                    <div className="flex justify-around">
                        <label className="inline-flex items-center">
                            <input type="radio" onClick={setStudent} name="radioGroup" className="form-radio text-blue-600"/>
                            <span className="ml-2">Ученик</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input type="radio" name="radioGroup" onClick={setTeacher} className="form-radio text-blue-600"/>
                            <span className="ml-2">Преподаватель</span>
                        </label>
                    </div>
                    <label className="pl-[18px]">Email</label>
                    <input
                        type="text"
                        className="focus:outline-none autofill:appearance-none placeholder:bg-slate-100 autofill:bg-slate-100 hover:bg-slate-100 placeholder-shown:bg-slate-100 block border bg-slate-100 mt-2 shadow-inner border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        onChange={(e)=>{setEmail(e.target.value)}}
                        value={email}
                        ref={emailRef}
                        required
                        placeholder="Email"/>
                    <label className="pl-[18px]">Имя</label>
                    <input
                        type="text"
                        className="focus:outline-none autofill:appearance-none placeholder:bg-slate-100 autofill:bg-slate-100 hover:bg-slate-100 placeholder-shown:bg-slate-100 block border bg-slate-100 mt-2 shadow-inner border-grey-light w-full p-3 rounded mb-4"
                        name="name"
                        onChange={(e)=>{setName(e.target.value)}}
                        value={name}
                        required
                        placeholder="Имя"/>
                    <label className="pl-[18px]">Фамилие</label>
                    <input
                        type="text"
                        className="focus:outline-none autofill:appearance-none placeholder:bg-slate-100 autofill:bg-slate-100 hover:bg-slate-100 placeholder-shown:bg-slate-100 block border bg-slate-100 mt-2 shadow-inner border-grey-light w-full p-3 rounded mb-4"
                        name="surname"
                        placeholder="Фамилие"
                        onChange={(e)=>{setSurname(e.target.value)}}
                        value={surname}
                        required
                    />

                    <label className="pl-[18px]">Пароль</label>
                    <div>
                        <div className="flex">
                            <div className="mt-2 outline-none block border bg-slate-100 w-full p-3 rounded mb-4 shadow-custom border-grey-light justify-between">
                                <input type={showPwd ? "text" : "password"}
                                       className="bg-slate-100 3xl:w-[96%] xl:w-[95%] md:w-[90%] focus:outline-none autofill:appearance-none placeholder:bg-slate-100 autofill:bg-slate-100 hover:bg-slate-100 placeholder-shown:bg-slate-100"
                                       id="password"
                                       autoComplete="off"
                                       placeholder="Пароль"
                                       onChange={(e)=>{setPassword(e.target.value)}}
                                       value={password}
                                       required
                                />
                                <button onClick={showPassport}>
                                    {showPwd ?
                                        <svg viewBox="64 64 896 896" focusable="false" className="" data-icon="eye" width="1em"
                                             height="1em" fill="currentColor" aria-hidden="true"><path
                                            d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path></svg>
                                        :
                                        <svg viewBox="64 64 896 896" focusable="false" className=""
                                             data-icon="eye-invisible" width="1em" height="1em" fill="currentColor"
                                             aria-hidden="true">
                                            <path
                                                d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"></path>
                                            <path
                                                d="M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"></path>
                                        </svg>
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                    <label className="pl-[18px]">Повторите пароль</label>
                    <div className="mt-2 outline-none block border bg-slate-100 w-full p-3 rounded mb-4 shadow-custom border-grey-light justify-between">
                        <input type={showRepeatPwd ? "text" : "password"}
                               className="bg-slate-100 3xl:w-[96%] xl:w-[95%] md:w-[90%] focus:outline-none autofill:appearance-none placeholder:bg-slate-100 autofill:bg-slate-100 hover:bg-slate-100 placeholder-shown:bg-slate-100"
                               id="passwordRepeat"
                               autoComplete="off"
                               placeholder="Повторите пароль"
                               onChange={(e)=>{setPasswordRepeat(e.target.value)}}
                               value={passwordRepeat}
                               required
                        />
                        <button onClick={showRepeatPassport}>
                            {showRepeatPwd ?
                                <svg viewBox="64 64 896 896" focusable="false" className="" data-icon="eye" width="1em"
                                     height="1em" fill="currentColor" aria-hidden="true"><path
                                    d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path></svg>
                                :
                                <svg viewBox="64 64 896 896" focusable="false" className=""
                                     data-icon="eye-invisible" width="1em" height="1em" fill="currentColor"
                                     aria-hidden="true">
                                    <path
                                        d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"></path>
                                    <path
                                        d="M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"></path>
                                </svg>
                            }
                        </button>
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="w-48 py-2 rounded-xl bg-orange-500 hover:bg-green-dark
                    justify-self-center text-white ">Зарегестрироваться</button>
                    </div>
                    <div className="text-center text-sm text-grey-dark mt-4">
                        <a className="no-underline border-grey-dark text-gray-500" href="#">
                            Забыли пароль?
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );

};
