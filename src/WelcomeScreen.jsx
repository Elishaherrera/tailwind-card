import { VscAccount } from "react-icons/vsc";
import { VscSettingsGear } from "react-icons/vsc";
import { IoIosHelpCircleOutline } from "react-icons/io";

function WelcomeScreen() {
  return (
    <div class="bg-gray-800 rounded-lg shadow-md p-6 w-380 h-180">
      <h1 class="text-white text-start mb-4">
        <span class="text-3xl font-bold">Bible Translation Manager</span>
        <span class=" text-white px-4 py-2 text-3xl">Get Started</span>
      </h1>

      <div class="flex flex-col items-start mt-6">
        <div class="flex items-center mb-2">
          <span class="mr-2 text-xl text-white"><VscAccount /></span>
          <span class="font-bold text-white">Get Started</span>
        </div>
        <div class="text-blue-500 text-sm mb-1">Login</div>
        <div class="text-blue-500 text-sm">Sign Up</div>
      </div>

      <div class="flex flex-col items-start mt-6">
        <div class="flex items-center mb-2">
          <span class="mr-2 text-xl text-white"><VscSettingsGear /></span>
          <span class="text-white font-bold">Settings</span>
        </div>
        <div class="text-blue-500 text-sm">Open Settings</div>
      </div>

      <div class="flex flex-col items-start mt-6">
        <div class="flex items-center mb-2">
          <span class="mr-2 text-xl text-white"><IoIosHelpCircleOutline /></span>
          <span class="text-white font-bold">Help</span>
        </div>
        <div class="text-blue-500 text-sm">Documentation</div>
      </div>
    </div>

  );
}
export default WelcomeScreen;