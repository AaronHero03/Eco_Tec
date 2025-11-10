import React from "react";
import {
  Bed,
  Utensils,
  Droplet,
  ShowerHead,
  Plus,
  LucideIcon,
  ChevronRight,
} from "lucide-react";

interface AccommodationItemProps {
  icon: LucideIcon;
  title: string;
  count: number;
}

const AccommodationItem: React.FC<AccommodationItemProps> = ({
  icon: Icon,
  title,
  count,
}) => (
  <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-md cursor-pointer hover:bg-gray-50 transition duration-150">
    <div className="flex items-center">
      {/* Icon Area */}
      <div className="p-2 bg-gray-100 rounded-lg mr-4">
        <Icon className="w-5 h-5 text-gray-600" />
      </div>
      {/* Text Info */}
      <div>
        <p className="font-semibold text-gray-800">{title}</p>
        <p className="text-sm text-gray-500">{count} disponibles</p>
      </div>
    </div>
    <ChevronRight className="w-5 h-5 text-gray-500" />
  </div>
);

const AccommodationSection: React.FC = () => (
  <div className="w-full">
    <h3 className="text-lg font-semibold mb-4 text-gray-800">Alojamiento</h3>
    <div className="space-y-3">
      <AccommodationItem icon={Bed} title="Dormitorios" count={3} />
      <AccommodationItem icon={Utensils} title="Cocinas" count={3} />
      <AccommodationItem icon={Droplet} title="Lavandería" count={1} />
      <AccommodationItem icon={ShowerHead} title="Baños" count={3} />
    </div>
    <button className="flex items-center justify-center w-full mt-4 py-3 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition duration-150">
      <Plus className="w-5 h-5 mr-2" />
      Añadir
    </button>
  </div>
);

export default AccommodationSection;
