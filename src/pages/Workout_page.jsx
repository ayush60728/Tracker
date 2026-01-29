import Workout from "../components/Workout"
import Left from "../components/Left"
const Workout_page = () => {
  return (
    <div className="flex bg-gray-200">
      <Left />
      <div className="flex w-screen ml-53">
        <Workout />
      </div>
    </div>
  )
}
export default Workout_page