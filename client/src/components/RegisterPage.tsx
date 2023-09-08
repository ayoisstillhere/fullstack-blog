const RegisterPage = () => {
  return (
    <form className="max-w-[400px] mx-auto my-0">
      <h1 className="text-center font-bold text-4xl pb-5">Register</h1>
      <input
        type="text"
        placeholder="username"
        className="block mb-[5px] w-[100%] py-[5px] px-[7px] bg-[#fff] border-2 border-[#ddd] rounded-[5px]"
      />
      <input
        type="password"
        placeholder="password"
        className="block mb-[5px] w-[100%] py-[5px] px-[7px] bg-[#fff] border-2 border-[#ddd] rounded-[5px]"
      />
      <button className="w-[100%] block bg-[#555] text-white rounded-[5px] py-[7px]">
        Register
      </button>
    </form>
  );
};

export default RegisterPage;
