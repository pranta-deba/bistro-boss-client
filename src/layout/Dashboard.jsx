import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            <div>
                <div className="drawer z-10 md:hidden">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-72 min-h-full bg-[#D1A054] text-base-content">
                            <li><Link to="" className={"text-xl font-bold cinzelFont flex items-center gap-1"}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g clipPath="url(#clip0_41_619)">
                                    <path d="M23.3529 10.4388C23.3523 10.4383 23.3518 10.4377 23.3512 10.4372L13.5611 0.647461C13.1439 0.22998 12.589 0 11.9989 0C11.4087 0 10.8539 0.229797 10.4365 0.647278L0.651483 10.4321C0.648187 10.4354 0.644892 10.4388 0.641596 10.4421C-0.215338 11.304 -0.213873 12.7024 0.645807 13.5621C1.03857 13.955 1.55731 14.1826 2.11193 14.2064C2.13445 14.2086 2.15716 14.2097 2.18005 14.2097H2.57025V21.4144C2.57025 22.84 3.73022 24 5.15624 24H8.98644C9.37463 24 9.68957 23.6852 9.68957 23.2969V17.6484C9.68957 16.9979 10.2187 16.4687 10.8693 16.4687H13.1285C13.779 16.4687 14.3082 16.9979 14.3082 17.6484V23.2969C14.3082 23.6852 14.623 24 15.0113 24H18.8415C20.2676 24 21.4275 22.84 21.4275 21.4144V14.2097H21.7894C22.3793 14.2097 22.9341 13.9799 23.3518 13.5624C24.2124 12.7013 24.2128 11.3005 23.3529 10.4388Z" fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_41_619">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>Admin Home</Link></li>
                            <li><Link to="/dashboard/cart" className={"text-xl font-bold cinzelFont flex items-center gap-1"}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g clipPath="url(#clip0_42_17)">
                                    <path d="M10.5937 22.5469C11.7587 22.5469 12.7031 21.6025 12.7031 20.4375C12.7031 19.2725 11.7587 18.3281 10.5937 18.3281C9.42871 18.3281 8.48431 19.2725 8.48431 20.4375C8.48431 21.6025 9.42871 22.5469 10.5937 22.5469Z" fill="black" />
                                    <path d="M17.6718 22.5469C18.8368 22.5469 19.7812 21.6025 19.7812 20.4375C19.7812 19.2725 18.8368 18.3281 17.6718 18.3281C16.5068 18.3281 15.5624 19.2725 15.5624 20.4375C15.5624 21.6025 16.5068 22.5469 17.6718 22.5469Z" fill="black" />
                                    <path d="M0.703121 2.85941H3.63528L7.02985 14.7428L6.7636 15.2753C6.06254 16.6759 7.08024 18.3281 8.6505 18.3281H20.4843C20.8729 18.3281 21.1874 18.0136 21.1874 17.625C21.1874 17.2363 20.8729 16.9218 20.4843 16.9218H8.6505C8.12836 16.9218 7.78711 16.372 8.02153 15.9042L8.21587 15.5156H20.4843C20.798 15.5156 21.0741 15.3076 21.1606 15.0054L23.9731 5.16171C24.0335 4.94956 23.991 4.72156 23.8584 4.54512C23.7252 4.36934 23.5172 4.26566 23.2968 4.26566H5.49948L4.84169 1.96331C4.75516 1.6612 4.47916 1.45312 4.16533 1.45312H0.703121C0.314483 1.45312 0 1.76761 0 2.15625C0 2.54488 0.314483 2.85941 0.703121 2.85941Z" fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_42_17">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>my cart</Link></li>
                            <div className="divider"></div>
                            <li><Link to="/" className={"text-xl font-bold cinzelFont flex items-center gap-1"}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g clipPath="url(#clip0_42_48)">
                                    <path d="M23.3529 10.4388C23.3523 10.4383 23.3518 10.4377 23.3512 10.4372L13.5611 0.647461C13.1439 0.22998 12.589 0 11.9989 0C11.4087 0 10.8539 0.229797 10.4365 0.647278L0.651483 10.4321C0.648187 10.4354 0.644892 10.4388 0.641596 10.4421C-0.215338 11.304 -0.213873 12.7024 0.645807 13.5621C1.03857 13.955 1.55731 14.1826 2.11193 14.2064C2.13445 14.2086 2.15716 14.2097 2.18005 14.2097H2.57025V21.4144C2.57025 22.84 3.73022 24 5.15624 24H8.98644C9.37463 24 9.68957 23.6852 9.68957 23.2969V17.6484C9.68957 16.9979 10.2187 16.4687 10.8693 16.4687H13.1285C13.779 16.4687 14.3082 16.9979 14.3082 17.6484V23.2969C14.3082 23.6852 14.623 24 15.0113 24H18.8415C20.2676 24 21.4275 22.84 21.4275 21.4144V14.2097H21.7894C22.3793 14.2097 22.9341 13.9799 23.3518 13.5624C24.2124 12.7013 24.2128 11.3005 23.3529 10.4388Z" fill="#151515" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_42_48">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>Home</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="w-[280px] h-full min-h-screen bg-[#D1A054] cinzelFont p-3 hidden md:block">
                    <h1 className="cinzelFont text-2xl font-extrabold">BISTRO BOSS</h1>
                    <ul className="m-8 space-y-3">
                        <li><Link to="" className={"text-xl font-bold cinzelFont flex items-center gap-1"}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clipPath="url(#clip0_41_619)">
                                <path d="M23.3529 10.4388C23.3523 10.4383 23.3518 10.4377 23.3512 10.4372L13.5611 0.647461C13.1439 0.22998 12.589 0 11.9989 0C11.4087 0 10.8539 0.229797 10.4365 0.647278L0.651483 10.4321C0.648187 10.4354 0.644892 10.4388 0.641596 10.4421C-0.215338 11.304 -0.213873 12.7024 0.645807 13.5621C1.03857 13.955 1.55731 14.1826 2.11193 14.2064C2.13445 14.2086 2.15716 14.2097 2.18005 14.2097H2.57025V21.4144C2.57025 22.84 3.73022 24 5.15624 24H8.98644C9.37463 24 9.68957 23.6852 9.68957 23.2969V17.6484C9.68957 16.9979 10.2187 16.4687 10.8693 16.4687H13.1285C13.779 16.4687 14.3082 16.9979 14.3082 17.6484V23.2969C14.3082 23.6852 14.623 24 15.0113 24H18.8415C20.2676 24 21.4275 22.84 21.4275 21.4144V14.2097H21.7894C22.3793 14.2097 22.9341 13.9799 23.3518 13.5624C24.2124 12.7013 24.2128 11.3005 23.3529 10.4388Z" fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_41_619">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>Admin Home</Link></li>
                        <li><Link to="/dashboard/cart" className={"text-xl font-bold cinzelFont flex items-center gap-1"}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clipPath="url(#clip0_42_17)">
                                <path d="M10.5937 22.5469C11.7587 22.5469 12.7031 21.6025 12.7031 20.4375C12.7031 19.2725 11.7587 18.3281 10.5937 18.3281C9.42871 18.3281 8.48431 19.2725 8.48431 20.4375C8.48431 21.6025 9.42871 22.5469 10.5937 22.5469Z" fill="black" />
                                <path d="M17.6718 22.5469C18.8368 22.5469 19.7812 21.6025 19.7812 20.4375C19.7812 19.2725 18.8368 18.3281 17.6718 18.3281C16.5068 18.3281 15.5624 19.2725 15.5624 20.4375C15.5624 21.6025 16.5068 22.5469 17.6718 22.5469Z" fill="black" />
                                <path d="M0.703121 2.85941H3.63528L7.02985 14.7428L6.7636 15.2753C6.06254 16.6759 7.08024 18.3281 8.6505 18.3281H20.4843C20.8729 18.3281 21.1874 18.0136 21.1874 17.625C21.1874 17.2363 20.8729 16.9218 20.4843 16.9218H8.6505C8.12836 16.9218 7.78711 16.372 8.02153 15.9042L8.21587 15.5156H20.4843C20.798 15.5156 21.0741 15.3076 21.1606 15.0054L23.9731 5.16171C24.0335 4.94956 23.991 4.72156 23.8584 4.54512C23.7252 4.36934 23.5172 4.26566 23.2968 4.26566H5.49948L4.84169 1.96331C4.75516 1.6612 4.47916 1.45312 4.16533 1.45312H0.703121C0.314483 1.45312 0 1.76761 0 2.15625C0 2.54488 0.314483 2.85941 0.703121 2.85941Z" fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_42_17">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>my cart</Link></li>
                        <div className="divider"></div>
                        <li><Link to="/" className={"text-xl font-bold cinzelFont flex items-center gap-1"}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clipPath="url(#clip0_42_48)">
                                <path d="M23.3529 10.4388C23.3523 10.4383 23.3518 10.4377 23.3512 10.4372L13.5611 0.647461C13.1439 0.22998 12.589 0 11.9989 0C11.4087 0 10.8539 0.229797 10.4365 0.647278L0.651483 10.4321C0.648187 10.4354 0.644892 10.4388 0.641596 10.4421C-0.215338 11.304 -0.213873 12.7024 0.645807 13.5621C1.03857 13.955 1.55731 14.1826 2.11193 14.2064C2.13445 14.2086 2.15716 14.2097 2.18005 14.2097H2.57025V21.4144C2.57025 22.84 3.73022 24 5.15624 24H8.98644C9.37463 24 9.68957 23.6852 9.68957 23.2969V17.6484C9.68957 16.9979 10.2187 16.4687 10.8693 16.4687H13.1285C13.779 16.4687 14.3082 16.9979 14.3082 17.6484V23.2969C14.3082 23.6852 14.623 24 15.0113 24H18.8415C20.2676 24 21.4275 22.84 21.4275 21.4144V14.2097H21.7894C22.3793 14.2097 22.9341 13.9799 23.3518 13.5624C24.2124 12.7013 24.2128 11.3005 23.3529 10.4388Z" fill="#151515" />
                            </g>
                            <defs>
                                <clipPath id="clip0_42_48">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>Home</Link></li>
                    </ul>
                </div>
            </div>
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;