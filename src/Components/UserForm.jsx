import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser, updateUser } from "../Redux/UserSlice";
import EditUserModal from "./EditUserModal";

const UserForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [editingUser, setEditingUser] = useState(null);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && age && imageUrl) {
      dispatch(
        addUser({
          id: Date.now().toString(),
          name,
          age,
          imageUrl,
        })
      );
      setName("");
      setAge("");
      setImageUrl("");
    }
  };

  const handleDelete = (id) => {
    if (
      window.confirm("Rostdan ham bu foydalanuvchini o'chirishni xohlaysizmi?")
    ) {
      dispatch(deleteUser(id));
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleUpdate = (updatedUser) => {
    dispatch(updateUser(updatedUser));
    setEditingUser(null);
  };

  return (
    <div className="container mx-auto mt-8">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
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
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Qo'shish
          </button>
        </div>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={user.imageUrl}
              alt={user.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2">{user.name}</h3>
              <p className="text-gray-700 mb-4">Yosh: {user.age}</p>
              <div className="flex justify-between">
                <button
                  onClick={() => handleEdit(user)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Tahrirlash
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  O'chirish
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {editingUser && (
        <EditUserModal
          user={editingUser}
          onUpdate={handleUpdate}
          onClose={() => setEditingUser(null)}
        />
      )}
    </div>
  );
};

export default UserForm;
