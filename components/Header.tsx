import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";
import logoImage from 'figma:asset/a79206a8ce873fd2bbff83a73e607f175e1ccae0.png';

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-sm">
      <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
        <div className="flex items-center space-x-3">
          <img 
            src={logoImage} 
            alt="JoeThein99 Logo" 
            className="h-10 w-10 object-contain rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          />
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-700 bg-clip-text text-transparent">
              JoeThein99
            </h1>
            <div className="flex items-center space-x-1 -mt-1">
              <Sparkles size={10} className="text-emerald-500" />
              <p className="text-xs text-slate-500 font-medium">Premium Gaming</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button 
            variant="outline" 
            size="sm"
            className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-200 font-medium"
          >
            လော့ဂ်အင်
          </Button>
          <Button 
            size="sm"
            className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-medium"
          >
            စာရင်းသွင်း
          </Button>
        </div>
      </div>
    </header>
  );
}