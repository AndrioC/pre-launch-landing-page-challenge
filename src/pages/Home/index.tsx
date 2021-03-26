import React from 'react'
import styles from './styles.module.scss'

import logoImg from '../../assets/images/logo.svg'
import scrollImg from '../../assets/images/icon-scroll.svg'

/* Images for categorie section */
import catImgPassion from '../../assets/images/illustration-passions.svg'
import financialImg from '../../assets/images/illustration-financial-freedom.svg'
import lifestyleImg from '../../assets/images/illustration-lifestyle.svg'
import workanywhereImg from '../../assets/images/illustration-work-anywhere.svg'

const Home:React.FC = () => {
    return (
        <div className={styles.contentContainer}>
            <header className={styles.headerSection}>
                <img src={logoImg} alt="logo-image"/>
            </header>

            {/* Information section */}
            <section>
                <div className={styles.contentInformation}>
                    <h1>Get paid for the work you <span>love</span> to do.</h1>
                    <p>
                        The 9-5 grind is so last century. We believe in <br />
                        living life on your own terms. Wheter you're <br />
                        looking to escape the rat race or set up a side <br />
                        hustle, we've got you covered.
                    </p>
                    <img src={scrollImg} alt="scroll-image"/>
                </div>
            </section>

            {/* Categories section */}

            <section>
                <div className={styles.contentCategories}>
                    <div>
                        <div>
                            <img src={catImgPassion} alt="image-passion"/>
                        </div>
                        <span>Indulge your passions</span>
                        <p>
                            Your passions shouldn't be just for the <br />
                            weekend. Earn a living doing what you love.
                        </p>
                    </div>
                    <div>
                        <div>
                            <img src={financialImg} alt="image-passion"/>
                        </div>
                        <span>Gain financial freedom</span>
                        <p>
                            Start making money work for you. There's <br />
                            nothing quite like earning while you sleep.
                        </p>
                    </div>
                    <div>
                        <div>
                            <img src={lifestyleImg} alt="image-passion"/>
                        </div>
                        <span>Choose your lifestyle</span>
                        <p>
                            Own your daily schedule. Fancy a lie-in? Go for <br />
                            it! Take charge of your week.
                        </p>
                    </div>
                    <div>
                        <div>
                            <img src={workanywhereImg} alt="image-passion"/>
                        </div>
                        <span>Work from anywhere</span>
                        <p>
                            Selling online means not being pinned down. <br />
                            Want to work AND travel? Go for it!.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home