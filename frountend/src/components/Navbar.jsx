import { Link } from 'react-router-dom';
import '../index.css'
export default function Navbar() {
  return (
    <nav className="bg-green-600 text-white p-3">
     <div className='mx-2 flex justify-around items-center'>
     <div className="font-bold text-2xl .poppins-semibold ">EcoTrack</div>
      <div className="space-x-4 text-lg">
        <Link to="/about">About</Link>

      </div>
     </div>
    </nav>
  );
}
