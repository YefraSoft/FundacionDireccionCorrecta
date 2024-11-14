export default function Footer() {
  return (
    <footer className="bg-cello-800 text-white p-4 mt-8 text-center">
      <p>Copyright © 2021 My Website. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="#" className="hover:text-cello-400">
          Link 1
        </a>
        <a href="#" className="hover:text-cello-400">
          Link 2
        </a>
        <a href="#" className="hover:text-cello-400">
          Link 3
        </a>
        <span className="text-2xl text-red-500 font-bold">
          BETA VERSION, Your se a code in this repo:{" "}
          <a>https://github.com/YefraSoft/direccionCorrectav2</a>
        </span>
      </div>
    </footer>
  );
}
