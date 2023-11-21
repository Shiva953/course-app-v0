import { useNavigate } from 'react-router-dom';

const Entrypage = () => {
  const navigate = useNavigate();

  const handleUserClick = () => {
    navigate('/user');
  };

  const handleAdminClick = () => {
    navigate('/admin');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-8xl font-bold mb-8 font-inter">Welcome</h1>
        <div className="flex justify-center">
          <button
            onClick={handleUserClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16 mx-2 rounded"
          >
            USER
          </button>
          <button
            onClick={handleAdminClick}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-8 px-16 mx-2 rounded"
          >
            ADMIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Entrypage;