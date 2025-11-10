import React from "react";
import {
  Menu,
  Mail,
  Bell,
  Music,
  Thermometer,
  Shield,
  User,
} from "lucide-react";

const Sidebar: React.FC = () => (
  <div className="flex flex-col items-center justify-between w-20 h-full bg-white shadow-xl py-6 fixed left-0 top-0 rounded-r-3xl z-10">
    {/* Upper Icons */}
    <div className="flex flex-col space-y-8">
      <Mail className="w-6 h-6 text-gray-400 cursor-pointer hover:text-indigo-600" />
      <Menu className="w-6 h-6 text-gray-700 cursor-pointer hover:text-indigo-600" />
    </div>
    {/* Middle Icons */}
    <div className="flex flex-col space-y-8">
      <Bell className="w-6 h-6 text-gray-700 cursor-pointer hover:text-indigo-600" />
      <Music className="w-6 h-6 text-gray-700 cursor-pointer hover:text-indigo-600" />
      <Thermometer className="w-6 h-6 text-gray-700 cursor-pointer hover:text-indigo-600" />
      <Shield className="w-6 h-6 text-gray-700 cursor-pointer hover:text-indigo-600" />
    </div>
    {/* User Profile */}
    <div className="flex flex-col items-center space-y-2">
      <User className="w-6 h-6 text-gray-700 cursor-pointer hover:text-indigo-600" />
      <div className="w-8 h-8 bg-gray-300 rounded-full overflow-hidden">
        {/* User profile picture placeholder */}
      </div>
    </div>
  </div>
);

export default Sidebar;
