import Left from "../components/Left"
import Text from "../components/Text"
import Cale from "../components/Cale"

const Home_page = () => {
  return (
    <>
      <div className="flex">

        <div>
          <Left />
        </div>

        <div className="flex flex-1 ml-16 md:ml-56">
          <Text />
        </div>

        {/* Hide calendar on mobile */}
        <div className="hidden md:block">
          <Cale />
        </div>

      </div>
    </>
  )
}
export default Home_page
