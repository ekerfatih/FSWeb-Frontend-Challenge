import {useGlobalContext} from "../contexts/GlobalContext.jsx";

function Profile() {
    const {content} = useGlobalContext();
    if (!content) return null;
    const {birth, city, edu, pref} = content.profile.information;
    const {p1, p2} = content.profile.about;
    return (
        <>
            <section className="profile-section">
                <h1 className="dark:text-cadblue mb-8 text-5xl font-bold max-lg:text-center">{content.profile.heading}</h1>
                <div className="flex gap-10 max-lg:flex-col max-lg:items-center">
                    <div className="profile w-[40%] max-lg:w-[60%]">
                        <h2 className="dark:text-melrose text-3xl max-lg:text-center text-govbay my-4 font-medium">{content.profile.profileTitle}</h2>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2 dark:text-white">
                            <span className="font-bold">{birth}</span>
                            <span>24.03.1996</span>

                            <span className="font-bold">{city}</span>
                            <span>Ankara</span>

                            <span className="font-bold">{edu}</span>
                            <span>Hacettepe Ünv. Biyoloji Lisans, 2016</span>

                            <span className="font-bold">{pref}</span>
                            <span>Frontend, UI</span>
                        </div>

                    </div>
                    <div className="boutme max-lg:flex max-lg:items-center max-lg:flex-col">
                        <h2 className="dark:text-melrose text-3xl max-lg:text-center text-govbay my-4 font-medium">{content.profile.aboutMe}</h2>
                        <div className="dark:text-white flex flex-col gap-6 max-lg:w-[60%] max-lg:text-center ">
                            <p>
                                {p1}
                            </p>
                            <p>
                                {p2}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <hr className="my-10 dark:text-melrose
              text-cornblue"/>
        </>
    )
}

export default Profile;