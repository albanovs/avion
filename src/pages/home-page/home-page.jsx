import Header from '../../components/header/header'
import './home-page.css'
import { AiOutlineCalendar } from "react-icons/ai";
import img1 from '../../img/card/img1.png'
import img2 from '../../img/card/img2.png'
import img3 from '../../img/card/img3.png'
import img4 from '../../img/card/img4.png'
import Card from '../../components/card/card';

export default function HomePage() {

    const allCards = [
        { name: 'The Dandy chair', price: 250, img: img1 },
        { name: 'Rustic Vase Set', price: 155, img: img2 },
        { name: 'The Silky Vase', price: 125, img: img3 },
        { name: 'The Silky Vase', price: 399, img: img4 },
    ]

    return (
        <div className='home-page'>
            <div className='section-one'>
                <div className='container'>
                    <div className='block-left'>
                        <div>
                            <h1>The furniture brand for the future,
                                with timeless designs</h1>
                            <button>View collection</button>
                        </div>
                        <p>
                            A new era in eco friendly furniture with Avelon, the French luxury retail brand
                            with nice fonts, tasteful colors and a beautiful way to display things digitally
                            using modern web technologies.
                        </p>
                    </div>
                    <div className='block-right'>

                    </div>
                </div>

            </div>
            <div className='section-two'>
                <h1 className='title'>What makes our brand different</h1>
                <div className='container'>
                    <div className='block-item'>
                        <AiOutlineCalendar size={30} />
                        <h1>Next day as standard</h1>
                        <p>Order before 3pm and get your order
                            the next day as standard</p>
                    </div>
                    <div className='block-item'>
                        <AiOutlineCalendar size={30} />
                        <h1>Made by true artisans</h1>
                        <p>Handmade crafted goods made with
                            real passion and craftmanship</p>
                    </div>
                    <div className='block-item'>
                        <AiOutlineCalendar size={30} />
                        <h1>Unbeatable prices</h1>
                        <p>For our materials and quality you won’t find better prices anywhere</p>
                    </div>
                    <div className='block-item'>
                        <AiOutlineCalendar size={30} />
                        <h1>Recycled packaging</h1>
                        <p>We use 100% recycled packaging to ensure our footprint is manageable</p>
                    </div>
                </div>
            </div>
            <div className='section-three'>
                <h1>New ceramics</h1>
                <div className='container'>
                    {
                        allCards.map(item => <Card data={item} />)
                    }
                </div>
                <div className='button'>
                    <button>View collection</button>
                </div>
            </div>
        </div>
    )
}
