
const Header = () => {
    return (
        <header className="h-screen min-h-1000px w-full text-center min-h-[1000px] flex justify-center items-center bg-[#262626]">
            <section className="flex justify-center items-center h-full relative">
                <h1 className="text-3xl ">Header</h1>
                <div className="w-[700px] h-[700px] border-white border-4">
                    <img className="w-full h-full object-cover" src='./assets/sana_5.jpg' alt="png photosfrom" />
                </div>
            </section>
        </header>
    )
}

export default Header