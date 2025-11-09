// import HeroImage from '../assets/images/hero.jpg';

const Home = () => {
    return (
        <div className='relative h-screen bg-cover bg-center'
            style={{ backgroundImage: "url('/images/hero2.jpeg')" }}>
                <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
                    <h1>Explore the World with us</h1>
                    <p>Discover amazing places at exclusive deals</p>
                    <button>Get Started</button>
                </div>

        </div>

    )
}

export default Home 


