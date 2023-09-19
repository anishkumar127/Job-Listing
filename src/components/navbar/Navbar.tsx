import Link from "next/link";
const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between items-center p-6 container">
        <Link href="/" className="text-[25px] font-bold">
          Joblash
        </Link>
        <ul className="flex gap-4 text-[1.2rem] text-md">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/create-job">Create a job</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
