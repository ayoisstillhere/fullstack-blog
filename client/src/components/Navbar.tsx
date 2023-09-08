const Navbar = () => {
  return (
    <header className="flex justify-between mb-[50px]">
      <a href="" className="font-bold">MyBlog</a>
      <nav className="flex gap-[15px]">
        <a href="" className="no-underline text-inherit">Login</a>
        <a href="" className="no-underline text-inherit">Register</a>
      </nav>
    </header>
  );
};

export default Navbar;
