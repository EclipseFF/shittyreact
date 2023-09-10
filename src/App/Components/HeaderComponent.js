import {Link} from "react-router-dom";

export function HeaderComponent() {
    return (
        <div className="bg-white 3xl:pt-[44px] xl:pt-[30px] md:pt-[20px] xsm:pt-[10px] 3xl:px-[30px] 3xl:pb-[20px] flex 3xl:justify-between sm:justify-around">
            <img
                src={process.env.PUBLIC_URL+`../Assets/logo.jpg`}
                alt="logo"
                className="sm:w-[75px] sm:inline xsm:w-[60px] 3xl:hidden"
            />
            <div className="flex justify-between 3xl:w-[90%] sm:w-[50%] items-center md:ml-[20px] xsm:ml-0">
                <Link to={"/"}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 30" fill="none" className="3xl:hidden md:inline w-[25px] h-[25px] pt-2">

                        <path d="M27.9177 11.6608L16.3863 0.775589L16.3632 0.753954C15.8332 0.268975 15.1409 0 14.4225 0C13.7042 0 13.0118 0.268975 12.4819 0.753954L12.4574 0.775589L0.928858 11.6608C0.636499 11.9313 0.403106 12.2592 0.24328 12.6241C0.0834534 12.9889 0.000632939 13.3828 0 13.781V27.1153C0 27.8804 0.303918 28.6141 0.844895 29.1551C1.38587 29.6961 2.11959 30 2.88465 30H9.80782C10.5729 30 11.3066 29.6961 11.8476 29.1551C12.3886 28.6141 12.6925 27.8804 12.6925 27.1153V20.7691H16.1541V27.1153C16.1541 27.8804 16.458 28.6141 16.9989 29.1551C17.5399 29.6961 18.2736 30 19.0387 30H25.9619C26.7269 30 27.4607 29.6961 28.0016 29.1551C28.5426 28.6141 28.8465 27.8804 28.8465 27.1153V13.781C28.8459 13.3828 28.7631 12.9889 28.6032 12.6241C28.4434 12.2592 28.21 11.9313 27.9177 11.6608ZM25.3849 26.5384H19.6156V20.1922C19.6156 19.8134 19.541 19.4383 19.3961 19.0883C19.2511 18.7383 19.0386 18.4203 18.7707 18.1524C18.5029 17.8846 18.1849 17.6721 17.8349 17.5271C17.4849 17.3821 17.1098 17.3075 16.731 17.3075H12.1155C11.3505 17.3075 10.6168 17.6114 10.0758 18.1524C9.53481 18.6934 9.23089 19.4271 9.23089 20.1922V26.5384H3.46158V14.0306L14.4233 3.68188L25.3849 14.0306V26.5384Z" fill="#666666"/>

                    </svg>
                </Link>
                <Link to={"/courses"}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 30" fill="none" className="3xl:hidden md:inline w-[26px] h-[24px] pt-2">
                        <path d="M17.3728 7.76744C17.1468 7.63182 16.8889 7.55859 16.6254 7.55522C16.362 7.55185 16.1023 7.61847 15.873 7.74828C15.6436 7.87808 15.4529 8.06642 15.3201 8.29406C15.1874 8.5217 15.1174 8.78049 15.1174 9.044V20.9559C15.1174 21.2194 15.1874 21.4782 15.3201 21.7059C15.4529 21.9335 15.6436 22.1218 15.873 22.2516C16.1023 22.3814 16.362 22.4481 16.6254 22.4447C16.8889 22.4413 17.1468 22.3681 17.3728 22.2325L27.2993 16.2765C27.5197 16.1442 27.7021 15.9571 27.8287 15.7334C27.9553 15.5097 28.0219 15.257 28.0219 15C28.0219 14.7429 27.9553 14.4902 27.8287 14.2665C27.7021 14.0428 27.5197 13.8557 27.2993 13.7234L17.3728 7.76744ZM23.6384 15L18.0954 18.3254V11.6745L23.6384 15Z" fill="#666666"/>
                        <path d="M30.5632 0.389982C23.916 -0.129994 17.2382 -0.129994 10.5909 0.389982L6.14185 0.739398C4.82724 0.841873 3.58473 1.38131 2.61222 2.27178C1.63972 3.16225 0.993163 4.35254 0.775538 5.65306C-0.258513 11.8414 -0.258513 18.1585 0.775538 24.3468C0.993163 25.6473 1.63972 26.8376 2.61222 27.7281C3.58473 28.6186 4.82724 29.158 6.14185 29.2605L10.589 29.6099C17.2378 30.13 23.9164 30.13 30.5652 29.6099L35.0123 29.2605C36.327 29.158 37.5695 28.6186 38.542 27.7281C39.5145 26.8376 40.161 25.6473 40.3787 24.3468C41.411 18.1586 41.411 11.8413 40.3787 5.65306C40.161 4.35254 39.5145 3.16225 38.542 2.27178C37.5695 1.38131 36.327 0.841873 35.0123 0.739398L30.5632 0.389982ZM10.8232 3.36002C17.3172 2.85192 23.841 2.85192 30.3349 3.36002L34.782 3.70745C36.1241 3.81267 37.222 4.81923 37.4424 6.14542C38.4218 12.0078 38.4218 17.9921 37.4424 23.8544C37.3348 24.4995 37.0145 25.09 36.5323 25.5319C36.0502 25.9737 35.434 26.2415 34.782 26.2924L30.3349 26.6399C23.841 27.1481 17.3172 27.1481 10.8232 26.6399L6.37612 26.2924C5.72413 26.2415 5.10796 25.9737 4.62582 25.5319C4.14368 25.09 3.82332 24.4995 3.71579 23.8544C2.73639 17.9921 2.73639 12.0078 3.71579 6.14542C3.82332 5.50034 4.14368 4.90982 4.62582 4.46798C5.10796 4.02614 5.72413 3.7584 6.37612 3.70745L10.8232 3.36002Z" fill="#666666"/>
                    </svg>
                </Link>
                <Link to={"/teachers"}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 30" fill="none" className="3xl:hidden md:inline w-[26px] h-[26px] pt-2">
                        <path d="M32.7273 0H2.72727C2.00396 0 1.31026 0.287337 0.7988 0.7988C0.287337 1.31026 0 2.00396 0 2.72727V27.2727C0 27.996 0.287337 28.6897 0.7988 29.2012C1.31026 29.7127 2.00396 30 2.72727 30H5.00966C5.26774 30.0001 5.52054 29.9269 5.7387 29.789C5.95685 29.6511 6.13139 29.4542 6.24205 29.221C6.90515 27.821 7.95206 26.6381 9.26105 25.8097C10.57 24.9813 12.0873 24.5415 13.6364 24.5415C15.1854 24.5415 16.7027 24.9813 18.0117 25.8097C19.3207 26.6381 20.3676 27.821 21.0307 29.221C21.1413 29.4542 21.3159 29.6511 21.534 29.789C21.7522 29.9269 22.005 30.0001 22.2631 30H32.7273C33.4506 30 34.1443 29.7127 34.6558 29.2012C35.1672 28.6897 35.4545 27.996 35.4545 27.2727V2.72727C35.4545 2.00396 35.1672 1.31026 34.6558 0.7988C34.1443 0.287337 33.4506 0 32.7273 0ZM13.6364 21.8182C12.5576 21.8182 11.503 21.4983 10.606 20.8989C9.70899 20.2996 9.00986 19.4477 8.59702 18.451C8.18418 17.4543 8.07616 16.3576 8.28663 15.2995C8.49709 14.2414 9.01659 13.2695 9.77942 12.5067C10.5423 11.7439 11.5142 11.2244 12.5722 11.0139C13.6303 10.8034 14.727 10.9115 15.7237 11.3243C16.7204 11.7371 17.5723 12.4363 18.1717 13.3333C18.771 14.2302 19.0909 15.2848 19.0909 16.3636C19.0909 17.8103 18.5162 19.1977 17.4933 20.2206C16.4704 21.2435 15.083 21.8182 13.6364 21.8182ZM32.7273 27.2727H23.0847C22.4902 26.2477 21.7325 25.3265 20.8415 24.5455H28.6364C28.998 24.5455 29.3449 24.4018 29.6006 24.1461C29.8563 23.8903 30 23.5435 30 23.1818V6.81818C30 6.45652 29.8563 6.10968 29.6006 5.85395C29.3449 5.59821 28.998 5.45455 28.6364 5.45455H6.81818C6.45652 5.45455 6.10968 5.59821 5.85395 5.85395C5.59821 6.10968 5.45455 6.45652 5.45455 6.81818V23.1818C5.45439 23.4842 5.55478 23.7781 5.73992 24.0173C5.92506 24.2564 6.18445 24.4272 6.47727 24.5028C5.5657 25.2926 4.79205 26.2287 4.18807 27.2727H2.72727V2.72727H32.7273V27.2727Z" fill="#666666"/>
                    </svg>
                </Link>
                <div className="flex gap-x-3 pt-2 mr-10 md:mr-0">
                    <svg className="3xl:w-[23px] 3xl:h-[23px] xl:w-[20px] xl:h-[20px] lg:w-[16px] lg:h-[16px] sm:w-[15px] sm:h-[15px] sm:ml-[10px]" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M16.2037 12.2682L13.6637 11.9782C13.365 11.9431 13.0623 11.9761 12.7782 12.0749C12.4942 12.1736 12.2362 12.3354 12.0237 12.5482L10.1837 14.3882C7.34486 12.9444 5.03745 10.637 3.59367 7.79816L5.44367 5.94816C5.87367 5.51816 6.08367 4.91816 6.01367 4.30816L5.72367 1.78816C5.66698 1.30034 5.43287 0.850395 5.06591 0.524007C4.69895 0.197618 4.22478 0.0175757 3.73367 0.0181594H2.00367C0.873674 0.0181594 -0.0663265 0.958159 0.00367348 2.08816C0.533673 10.6282 7.36367 17.4482 15.8937 17.9782C17.0237 18.0482 17.9637 17.1082 17.9637 15.9782V14.2482C17.9737 13.2382 17.2137 12.3882 16.2037 12.2682Z" fill="#666666"/>
                    </svg>
                    <p className="inline 3xl:w-[180px] 3xl:text-[20px] xl:text-[16px] lg:text-[13px] md:hidden text-[#666] mt-[-3px]">+7 700 394 39 39</p>
                </div>
                <div className="flex pt-2">
                    <Link to={"/signup"} style={{display:"flex"}}>
                    <p className="3xl:inline text-black font-bold font-montserrat pr-[12px] 3xl:text-[20px] xl:text-[16px] lg:text-[13px] mt-[-3px] md:hidden">Войти</p>

                        <svg className="3xl:w-[25px] 3xl:h-[25px] xl:w-[21px] xl:h-[21px] lg:w-[18px] lg:h-[18px] sm:w-[17px] sm:h-[17px]"
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 18" fill="none">

                        <path d="M8.3 4.7C8.20736 4.79152 8.13381 4.90052 8.08361 5.02068C8.03341 5.14084 8.00756 5.26977 8.00756 5.4C8.00756 5.53022 8.03341 5.65915 8.08361 5.77931C8.13381 5.89948 8.20736 6.00848 8.3 6.1L10.2 8H1C0.45 8 0 8.45 0 9C0 9.55 0.45 10 1 10H10.2L8.3 11.9C8.20736 11.9915 8.13381 12.1005 8.08361 12.2207C8.03341 12.3408 8.00756 12.4698 8.00756 12.6C8.00756 12.7302 8.03341 12.8592 8.08361 12.9793C8.13381 13.0995 8.20736 13.2085 8.3 13.3C8.69 13.69 9.31 13.69 9.7 13.3L13.29 9.71C13.3827 9.61749 13.4563 9.5076 13.5064 9.38662C13.5566 9.26565 13.5824 9.13597 13.5824 9.005C13.5824 8.87403 13.5566 8.74435 13.5064 8.62338C13.4563 8.5024 13.3827 8.39251 13.29 8.3L9.7 4.7C9.60848 4.60736 9.49948 4.53381 9.37932 4.48361C9.25915 4.43341 9.13023 4.40756 9 4.40756C8.86977 4.40756 8.74085 4.43341 8.62068 4.48361C8.50052 4.53381 8.39152 4.60736 8.3 4.7ZM18 16H11C10.45 16 10 16.45 10 17C10 17.55 10.45 18 11 18H18C19.1 18 20 17.1 20 16V2C20 0.9 19.1 0 18 0H11C10.45 0 10 0.45 10 1C10 1.55 10.45 2 11 2H18V16Z"
                              fill="#666666"/>

                    </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}