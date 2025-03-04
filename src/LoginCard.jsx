function LoginCard() {


  return (
    <>
      <div class="bg-gray-200 rounded-lg shadow-md w-140 mt-4 ml-4">
        <div class="bg-[#017ACC] text-white p-2 rounded-t-lg flex justify-between items-center">
          <div class="font-semibold">Authentication</div>
          <button class="text-white hover:text-gray-300 pr-2">x</button>
        </div>
        <div class="p-4">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">Enter your DCS OAuth Credentials</label>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="e.g john@email.com"
            />
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password" />

            <div class="flex space-x-2 place-self-end mt-4">
              <button class="bg-white text-black py-2 px-4 rounded-lg">Cancel</button>
              <button class="bg-[#017ACC] text-white py-2 px-4 rounded-lg">Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginCard;
