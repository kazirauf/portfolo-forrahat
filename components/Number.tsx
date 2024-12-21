import { Button } from "./ui/MovingBorders";
const Number = () => {
  return (
    <div className="py-20 flex justify-center flex-wrap gap-10">
      <Button
        //   random duration will be fun , I think , may be not
        duration={Math.floor(Math.random() * 10000) + 10000}
        borderRadius="1.75rem"
        style={{
          //   add these two
          //   you can generate the color from here https://cssgradient.io/
          background: "rgb(4,7,29)",
          backgroundColor:
            "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          // add this border radius to make it more rounded so that the moving border is more realistic
          borderRadius: `calc(1.75rem* 0.96)`,
        }}
        // remove bg-white dark:bg-slate-900
        className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        <div className="p-10">
          <h1 className="text-center text-xl md:text-5xl text-purple font-bold">
            10+
          </h1>
          <p className="text-center text-white-100 mt-3 text-sm font-bold w-40">
            Clients Project Complete
          </p>
        </div>
      </Button>
      <Button
        //   random duration will be fun , I think , may be not
        duration={Math.floor(Math.random() * 10000) + 10000}
        borderRadius="1.75rem"
        style={{
          //   add these two
          //   you can generate the color from here https://cssgradient.io/
          background: "rgb(4,7,29)",
          backgroundColor:
            "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          // add this border radius to make it more rounded so that the moving border is more realistic
          borderRadius: `calc(1.75rem* 0.96)`,
        }}
        // remove bg-white dark:bg-slate-900
        className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        <div className="p-10">
          <h1 className="text-center text-xl md:text-5xl text-purple font-bold">
            2+
          </h1>
          <p className="text-center text-white-100 mt-3 text-sm font-bold w-40">
            Years of Coding Experience
          </p>
        </div>
      </Button>
      <Button
        //   random duration will be fun , I think , may be not
        duration={Math.floor(Math.random() * 10000) + 10000}
        borderRadius="1.75rem"
        style={{
          //   add these two
          //   you can generate the color from here https://cssgradient.io/
          background: "rgb(4,7,29)",
          backgroundColor:
            "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          // add this border radius to make it more rounded so that the moving border is more realistic
          borderRadius: `calc(1.75rem* 0.96)`,
        }}
        // remove bg-white dark:bg-slate-900
        className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        <div className="p-10">
          <h1 className="text-center text-xl md:text-5xl text-purple font-bold">
            60+
          </h1>
          <p className="text-center text-white-100 mt-3 text-sm font-bold w-40">
            Uploaded Content on Social Media
          </p>
        </div>
      </Button>
      <Button
        //   random duration will be fun , I think , may be not
        duration={Math.floor(Math.random() * 10000) + 10000}
        borderRadius="1.75rem"
        style={{
          //   add these two
          //   you can generate the color from here https://cssgradient.io/
          background: "rgb(4,7,29)",
          backgroundColor:
            "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          // add this border radius to make it more rounded so that the moving border is more realistic
          borderRadius: `calc(1.75rem* 0.96)`,
        }}
        // remove bg-white dark:bg-slate-900
        className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        <div className="p-10">
          <h1 className="text-center text-xl md:text-5xl text-purple font-bold">
            90+
          </h1>
          <p className="text-center text-white-100 mt-3 text-sm font-bold w-40">
            Repositories on My Github
          </p>
        </div>
      </Button>
    </div>
  );
};

export default Number;
