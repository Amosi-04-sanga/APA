import { ComputerDesktopIcon, UserGroupIcon, BriefcaseIcon, BanknotesIcon } from '@heroicons/react/24/outline';

const departments = [
  {
    name: 'IT Team',
    icon: ComputerDesktopIcon,
    members: 2,
    description: 'Handles all technical infrastructure, software, and digital solutions for APO.'
  },
  {
    name: 'Psychology Team',
    icon: UserGroupIcon,
    members: 3,
    description: 'Provides psychological support, counseling, and well-being programs for members.'
  },
  {
    name: 'Management Team',
    icon: BriefcaseIcon,
    members: 2,
    description: 'Oversees operations, strategy, and ensures smooth functioning of the organization.'
  },
  {
    name: 'Financial Team',
    icon: BanknotesIcon,
    members: 2,
    description: 'Manages budgeting, accounting, and financial planning for APO.'
  },
  {
    name: 'DNA technology',
    icon: ComputerDesktopIcon,
    members: 3,
    description: 'developing inovations on molecular biology conserning kids parenting and talent discovery.'
  },
];

export const metadata = {
  title: 'Departments Available in APO',
  description: 'Explore the various departments that make up APO and their roles.',
};

export default function DepartmentsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 px-4">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-3 text-[#10284A] tracking-tight drop-shadow-sm">Departments Available in APO</h1>
        <p className="text-lg text-[#10284A] opacity-60 font-medium">Explore the teams that drive our organization forward.</p>
      </div>
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {departments.map((dept) => (
          <div
            key={dept.name}
            className="bg-white cursor-pointer rounded-2xl shadow-lg flex flex-col items-center p-8 transition-transform duration-200 hover:scale-105 hover:shadow-md border border-blue-100 group"
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4 group-hover:bg-blue-200 transition-colors">
              <dept.icon className="h-9 w-9 text-[#10284A] group-hover:text-blue-700 transition-colors" />
            </div>
            <h2 className="text-xl font-bold text-[#10284A] mb-1 mt-2 tracking-tight group-hover:text-blue-700 transition-colors">{dept.name}</h2>
            <p className="text-[#10284A] font-semibold text-sm mb-2">{dept.members} members</p>
            <p className="text-gray-500 text-center text-base">{dept.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
} 
