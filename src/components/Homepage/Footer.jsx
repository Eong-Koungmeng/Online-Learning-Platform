export const Footer = () => {
  return (
    <div className="bg-gray-900 text-white pt-12 px-12">
      <h1 className="pl-8 text-2xl font-bold tracking-tight leading-none dark:text-dark">
        VM
      </h1>
      <p className="pl-8 pt-6 text-xl underline tracking-tight leading-none dark:text-dark">
        HomePage
      </p>
      <p className="pl-8 pt-6 text-xl underline tracking-tight leading-none dark:text-dark">
        Teach on VM
      </p>
      <p className="pl-8 pt-6 text-xl underline tracking-tight leading-none dark:text-dark">
        Support Us
      </p>
      <div className="flex justify-center items-center">
        <p className="text-center italic py-6 text-2xl tracking-tight leading-none dark:text-dark">
          Free for anyone, anywhere, forever
        </p>

        <p className="absolute right-12 font-bold text-end py-6 text-2xl tracking-tight leading-none dark:text-dark">
          &copy;VM 2023
        </p>
      </div>
    </div>
  );
};
