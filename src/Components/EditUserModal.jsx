import React, { useState } from "react";

const EditUserModal = ({ user, onUpdate, onClose }) => {
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [imageUrl, setImageUrl] = useState(user.imageUrl);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ ...user, name, age, imageUrl });
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="bg-white p-5 rounded-lg shadow-xl">
        <h2 className="text-xl font-bold mb-4">Foydalanuvchini tahrirlash</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Ism"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Yosh"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Rasm havolasi"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Saqlash
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              Bekor qilish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUserModal;