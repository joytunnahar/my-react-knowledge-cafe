import Profile  from '../../assets/image/author-img (1).jpg'

const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 border-b-2 max-w-[1100px] mx-auto'>
            <h1 className="text-4xl font-bold ">Knowledge Cafe</h1>
            <img className='w-20 rounded-full' src={Profile} alt="" />
        </header>
    );
};

export default Header;