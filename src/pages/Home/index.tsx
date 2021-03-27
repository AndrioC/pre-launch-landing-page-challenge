import React from 'react'
import styles from './styles.module.scss'

import logoImg from '../../assets/images/logo.svg'
import scrollImg from '../../assets/images/icon-scroll.svg'

/* Images for categorie section */
import catImgPassion from '../../assets/images/illustration-passions.svg'
import financialImg from '../../assets/images/illustration-financial-freedom.svg'
import lifestyleImg from '../../assets/images/illustration-lifestyle.svg'
import workanywhereImg from '../../assets/images/illustration-work-anywhere.svg'

/* Images for pricing section */
import freeImg from '../../assets/images/icon-free.svg'
import checkImg from '../../assets/images/icon-check.svg'
import checkBlueImg from '../../assets/images/icon-check-blue.svg'
import paidImg from '../../assets/images/icon-paid.svg'

const Home:React.FC = () => {
    return (
        <div className={styles.contentContainer}>
            <header className={styles.headerSection}>
                <img src={logoImg} alt="logo-icon"/>
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
                    <img src={scrollImg} alt="scroll-icon"/>
                </div>
            </section>

            {/* Categories section */}

            <section>
                <div className={styles.contentCategories}>
                    <div>
                        <div>
                            <img src={catImgPassion} alt="passion-icon"/>
                        </div>
                        <span>Indulge your passions</span>
                        <p>
                            Your passions shouldn't be just for the <br />
                            weekend. Earn a living doing what you love.
                        </p>
                    </div>
                    <div>
                        <div>
                            <img src={financialImg} alt="financial-icon"/>
                        </div>
                        <span>Gain financial freedom</span>
                        <p>
                            Start making money work for you. There's <br />
                            nothing quite like earning while you sleep.
                        </p>
                    </div>
                    <div>
                        <div>
                            <img src={lifestyleImg} alt="life-style-icon"/>
                        </div>
                        <span>Choose your lifestyle</span>
                        <p>
                            Own your daily schedule. Fancy a lie-in? Go for <br />
                            it! Take charge of your week.
                        </p>
                    </div>
                    <div>
                        <div>
                            <img src={workanywhereImg} alt="work-anywhere-icon"/>
                        </div>
                        <span>Work from anywhere</span>
                        <p>
                            Selling online means not being pinned down. <br />
                            Want to work AND travel? Go for it!.
                        </p>
                    </div>
                </div>
            </section>

            {/* Princing section */}
            <section>
                <div className={styles.contentPrincing}>

                    {/* Starting div */}
                    <div className={styles.headerContentPrincing}>
                        <h1>Our pricing plans</h1>
                        <p>
                            We only manke money when our creator make <br />
                            money. Our plans are always affordable, and it's <br />
                            completely free to get started.
                        </p>
                    </div>
                    {/* Closing div */}

                    {/* Starting div */}
                    <div className={styles.containerPlans}>
                        
                        {/* Starting div */}
                        <div className={styles.freePlanContent}>
                            <img src={freeImg} alt="free-pricing"/>
                            <div className={styles.freePlanHeaderTitleContent}>
                                <span>Dip your toe</span>
                                <p>
                                    Just getting started? No problem at <br />
                                    all! Our free plan will take you a long <br />
                                    way.
                                </p>
                            </div>

                            {/* Starting div */}
                            <div className={styles.freePlanInfoContent}>
                                <h1>Free</h1>
                                <div className={styles.freePlanInfoList}>
                                    <ul>
                                        <li>
                                            <img src={checkImg} alt="check-icon"/>
                                            <p>Unlimited products</p>
                                        </li>
                                        <li>
                                            <img src={checkImg} alt="check-icon"/>
                                            <p>Basic analytics</p>
                                        </li>
                                        <li>
                                            <img src={checkImg} alt="check-icon"/>
                                            <p>Limited marketplace exposure</p>
                                        </li>
                                        <li>
                                            <img src={checkImg} alt="check-icon"/>
                                            <p>10% fee per transaction</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* Closing div */}

                        </div>
                        {/* Closing div */}


                        {/* Starting div  - Pay plan  */}
                        <div className={styles.payPlanContent}>
                            <img src={paidImg} alt="paid-pricing"/>
                            <div className={styles.payPlanHeaderTitleContent}>
                                <span>Dive right in</span>
                                <p>
                                    Ready for the big time? Our paid plan <br />
                                    will help you take your business to the <br />
                                    next level.
                                </p>
                            </div>

                            {/* Starting div*/}
                            <div className={styles.payPlanInfoContent}>
                                <h1>$25.00 <span>/month</span></h1>
                                <div className={styles.payPlanInfoList}>
                                    <ul>
                                        <li>
                                            <img src={checkBlueImg} alt="check-icon"/>
                                            <p>Custom domain</p>
                                        </li>
                                        <li>
                                            <img src={checkBlueImg} alt="check-icon"/>
                                            <p>Advanced analytics and reports</p>
                                        </li>
                                        <li>
                                            <img src={checkBlueImg} alt="check-icon"/>
                                            <p>High marketplace visibility</p>
                                        </li>
                                        <li>
                                            <img src={checkBlueImg} alt="check-icon"/>
                                            <p>5% fee per transaction</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* Closing div*/}

                        </div>
                        {/* Closing div - Pay plan  */}
                    </div>
                    {/* Closing div */}
                </div>
            </section>
        
        
            {/* Notification section */}

            <section className={styles.sectionNotification}>
                <div className={styles.contentNotification}>
                    <div className={styles.headerTitleNotification}>
                        <h1>Get notified when we launch</h1>
                    </div>

                    <div className={styles.emailNotification}>
                        <form action="">
                            <input type="email" placeholder="Email address"/>
                            <button type="button">Get notified</button>
                        </form>
                    </div>
                </div>
            </section>
 
        
        </div>
    )
}

export default Home