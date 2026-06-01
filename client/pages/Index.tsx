import { useState, useRef, useEffect } from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import {
  MapPin,
  CalendarIcon,
  ChevronDown,
  Car,
  Clock,
  ArrowRight,
  Star,
  Phone,
  Mail,
  X,
  Check,
  Menu,
} from "lucide-react";

// ─── WOOP Logo SVG ────────────────────────────────────────────────────────────
function WoopLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="118"
      height="23"
      viewBox="0 0 118 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M107.895 0.764591C109.475 0.764591 110.851 0.985496 112.024 1.42731C113.213 1.85212 114.19 2.43837 114.955 3.18605C115.737 3.91673 116.323 4.74937 116.714 5.68397C117.105 6.61857 117.3 7.58715 117.3 8.58972C117.3 9.66025 117.096 10.6798 116.688 11.6484C116.297 12.6 115.703 13.4496 114.904 14.1973C114.122 14.945 113.145 15.5397 111.973 15.9815C110.8 16.4063 109.441 16.6188 107.895 16.6188H102.414C102.414 16.6188 102.406 16.6272 102.389 16.6442C102.389 16.6442 102.38 16.6442 102.363 16.6442C102.363 16.6442 102.363 16.6527 102.363 16.6697V19.8813H91.76C91.76 18.7428 91.76 17.6043 91.76 16.4658C91.76 15.3273 91.76 14.1888 91.76 13.0503C91.76 11.9118 91.76 10.7733 91.76 9.63477C91.76 8.49626 91.76 7.35775 91.76 6.21924C91.76 5.30164 91.76 4.39253 91.76 3.49192C91.76 2.57431 91.76 1.6652 91.76 0.764591H107.895ZM104.759 11.0876C105.269 11.0876 105.694 11.0027 106.034 10.8327C106.391 10.6458 106.654 10.4164 106.824 10.1445C106.994 9.85567 107.079 9.5668 107.079 9.27792C107.079 8.97205 106.994 8.69167 106.824 8.43678C106.654 8.1649 106.399 7.944 106.059 7.77407C105.719 7.60414 105.286 7.51918 104.759 7.51918H102.414C102.397 7.51918 102.38 7.52768 102.363 7.54467C102.363 7.54467 102.363 7.55316 102.363 7.57016V11.0621C102.38 11.0621 102.389 11.0706 102.389 11.0876C102.406 11.0876 102.414 11.0876 102.414 11.0876H104.759Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M56.2224 1.32543C54.1492 0.441809 51.5494 0 48.4227 0C46.8594 0 45.4235 0.118948 44.1151 0.356845C42.8236 0.57775 41.6596 0.909108 40.6231 1.35092C39.5865 1.77573 38.6774 2.29401 37.8958 2.90575C37.1311 3.50049 36.4854 4.1802 35.9586 4.94487C35.4488 5.70954 35.058 6.54218 34.7861 7.44279C34.5312 8.3434 34.4038 9.29499 34.4038 10.2976C34.4038 11.0622 34.4802 11.8184 34.6332 12.5661C34.8031 13.3138 35.058 14.0275 35.3978 14.7072C35.7547 15.3869 36.1965 16.0326 36.7233 16.6443C37.267 17.2391 37.9043 17.7828 38.6349 18.2756C39.3826 18.7684 40.2407 19.1932 41.2093 19.5501C42.1779 19.8899 43.2569 20.1533 44.4464 20.3402C45.6529 20.5441 46.9783 20.6461 48.4227 20.6461C50.4448 20.6461 52.2206 20.4592 53.7499 20.0853C55.2962 19.7285 56.6217 19.2272 57.7262 18.5815C58.8307 17.9188 59.7313 17.1541 60.428 16.2875C61.1247 15.4039 61.6345 14.4608 61.9574 13.4582C62.2802 12.4386 62.4417 11.3851 62.4417 10.2976C62.4417 8.29242 61.9234 6.51669 60.8868 4.97036C59.8503 3.42402 58.2955 2.20905 56.2224 1.32543ZM46.9189 8.30942C47.3437 8.17347 47.8535 8.1055 48.4482 8.1055C49.0429 8.1055 49.5442 8.17347 49.9521 8.30942C50.3599 8.44536 50.6827 8.62378 50.9206 8.84468C51.1585 9.0486 51.3285 9.278 51.4304 9.53289C51.5494 9.78778 51.6088 10.0427 51.6088 10.2976C51.6088 10.5185 51.5749 10.7394 51.5069 10.9603C51.4389 11.1642 51.32 11.3681 51.15 11.572C50.9971 11.7589 50.7932 11.9289 50.5383 12.0818C50.3004 12.2177 50.003 12.3282 49.6462 12.4131C49.3063 12.4981 48.907 12.5406 48.4482 12.5406C47.6665 12.5406 47.0378 12.4301 46.562 12.2092C46.0862 11.9883 45.7464 11.7079 45.5425 11.3681C45.3385 11.0282 45.2366 10.6799 45.2366 10.323C45.2366 10.0512 45.2876 9.78778 45.3895 9.53289C45.5085 9.26101 45.6869 9.02311 45.9248 8.8192C46.1797 8.59829 46.511 8.42836 46.9189 8.30942ZM84.773 1.32543C82.6999 0.441809 80.1 0 76.9734 0C75.4101 0 73.9742 0.118948 72.6657 0.356845C71.3743 0.57775 70.2103 0.909108 69.1737 1.35092C68.1372 1.77573 67.2281 2.29401 66.4464 2.90575C65.6818 3.50049 65.036 4.1802 64.5093 4.94487C63.9995 5.70954 63.6086 6.54218 63.3368 7.44279C63.0819 8.3434 62.9544 9.29499 62.9544 10.2976C62.9544 11.0622 63.0309 11.8184 63.1838 12.5661C63.3538 13.3138 63.6086 14.0275 63.9485 14.7072C64.3053 15.3869 64.7472 16.0326 65.2739 16.6443C65.8177 17.2391 66.4549 17.7828 67.1856 18.2756C67.9333 18.7684 68.7914 19.1932 69.76 19.5501C70.7286 19.8899 71.8076 20.1533 72.9971 20.3402C74.2036 20.5441 75.529 20.6461 76.9734 20.6461C78.9955 20.6461 80.7712 20.4592 82.3006 20.0853C83.8469 19.7285 85.1723 19.2272 86.2769 18.5815C87.3814 17.9188 88.282 17.1541 88.9787 16.2875C89.6754 15.4039 90.1852 14.4608 90.508 13.4582C90.8309 12.4386 90.9923 11.3851 90.9923 10.2976C90.9923 8.29242 90.4741 6.51669 89.4375 4.97036C88.401 3.42402 86.8461 2.20905 84.773 1.32543ZM75.4695 8.30942C75.8943 8.17347 76.4041 8.1055 76.9989 8.1055C77.5936 8.1055 78.0949 8.17347 78.5027 8.30942C78.9105 8.44536 79.2334 8.62378 79.4713 8.84468C79.7092 9.0486 79.8791 9.278 79.9811 9.53289C80.1 9.78778 80.1595 10.0427 80.1595 10.2976C80.1595 10.5185 80.1255 10.7394 80.0575 10.9603C79.9896 11.1642 79.8706 11.3681 79.7007 11.572C79.5478 11.7589 79.3439 11.9289 79.089 12.0818C78.8511 12.2177 78.5537 12.3282 78.1968 12.4131C77.857 12.4981 77.4577 12.5406 76.9989 12.5406C76.2172 12.5406 75.5885 12.4301 75.1127 12.2092C74.6369 11.9883 74.297 11.7079 74.0931 11.3681C73.8892 11.0282 73.7873 10.6799 73.7873 10.323C73.7873 10.0512 73.8382 9.78778 73.9402 9.53289C74.0591 9.26101 74.2376 9.02311 74.4755 8.8192C74.7303 8.59829 75.0617 8.42836 75.4695 8.30942Z"
        fill="#1075DF"
      />
      <path
        d="M24.7498 0.764591H35.0729C34.699 2.3619 34.3252 3.95921 33.9514 5.55653C33.5945 7.13684 33.2292 8.72566 32.8553 10.323C32.4815 11.9203 32.1077 13.5176 31.7338 15.1149C31.377 16.6952 31.0201 18.284 30.6633 19.8813H18.8109L17.2815 10.2975C17.2815 10.2805 17.273 10.272 17.2561 10.272C17.2561 10.255 17.2561 10.2465 17.2561 10.2465C17.2561 10.2465 17.2476 10.2465 17.2306 10.2465C17.2306 10.2465 17.2221 10.255 17.2051 10.272C17.2051 10.272 17.2051 10.2805 17.2051 10.2975L15.7012 19.8813H4.639C4.33313 18.6069 4.02726 17.3324 3.72139 16.058C3.41553 14.7835 3.10116 13.5091 2.7783 12.2346C2.47243 10.9602 2.16657 9.68574 1.8607 8.41129C1.55483 7.13684 1.24046 5.86239 0.917604 4.58794C0.611736 3.31349 0.305868 2.03904 0 0.764591H10.8583C10.9943 1.63122 11.1217 2.50634 11.2407 3.38996C11.3766 4.25659 11.504 5.12321 11.623 5.98984C11.7589 6.85646 11.8949 7.73159 12.0308 8.61521C12.1668 9.48183 12.2942 10.3485 12.4131 11.2151C12.4131 11.2151 12.4216 11.2151 12.4386 11.2151C12.4556 11.2151 12.4726 11.2151 12.4896 11.2151C12.5066 11.2151 12.5151 11.2151 12.5151 11.2151C12.5321 11.2151 12.5406 11.2151 12.5406 11.2151L13.968 0.764591H21.6402L23.144 11.2151C23.161 11.2151 23.1695 11.2151 23.1695 11.2151C23.1865 11.2151 23.195 11.2151 23.195 11.2151C23.4499 9.46484 23.7048 7.72309 23.9597 5.98984C24.2315 4.25659 24.4949 2.51484 24.7498 0.764591Z"
        fill="black"
      />
    </svg>
  );
}

// ─── Star Rating ──────────────────────────────────────────────────────────────
function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[#EFBF14] text-[#EFBF14]" />
      ))}
    </div>
  );
}

// ─── Time Picker ─────────────────────────────────────────────────────────────
function TimePicker({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  const hours = Array.from({ length: 24 }, (_, i) =>
    i.toString().padStart(2, "0")
  );
  const minutes = Array.from({ length: 12 }, (_, i) =>
    (i * 5).toString().padStart(2, "0")
  );

  const [h, m] = value ? value.split(":") : ["09", "00"];

  const hourRef = useRef<HTMLDivElement>(null);
  const minRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hourRef.current) {
      const idx = hours.indexOf(h);
      hourRef.current.scrollTop = idx * 36;
    }
    if (minRef.current) {
      const mIdx = minutes.indexOf(m);
      minRef.current.scrollTop = mIdx * 36;
    }
  }, []);

  const selectHour = (hh: string) => onChange(`${hh}:${m}`);
  const selectMin = (mm: string) => onChange(`${h}:${mm}`);

  return (
    <div className="flex gap-2 p-3">
      <div className="flex flex-col items-center">
        <span className="text-xs text-gray-500 mb-1">Часы</span>
        <div
          ref={hourRef}
          className="h-44 overflow-y-auto scrollbar-hide border rounded-lg w-16"
        >
          {hours.map((hh) => (
            <div
              key={hh}
              onClick={() => selectHour(hh)}
              className={cn(
                "h-9 flex items-center justify-center cursor-pointer text-sm font-medium rounded transition-colors",
                h === hh
                  ? "bg-[#1572D3] text-white"
                  : "hover:bg-blue-50 text-gray-700"
              )}
            >
              {hh}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center text-xl font-bold text-gray-400 pb-1">:</div>
      <div className="flex flex-col items-center">
        <span className="text-xs text-gray-500 mb-1">Минуты</span>
        <div
          ref={minRef}
          className="h-44 overflow-y-auto scrollbar-hide border rounded-lg w-16"
        >
          {minutes.map((mm) => (
            <div
              key={mm}
              onClick={() => selectMin(mm)}
              className={cn(
                "h-9 flex items-center justify-center cursor-pointer text-sm font-medium rounded transition-colors",
                m === mm
                  ? "bg-[#1572D3] text-white"
                  : "hover:bg-blue-50 text-gray-700"
              )}
            >
              {mm}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Map Popover ──────────────────────────────────────────────────────────────
function LocationPicker({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [inputVal, setInputVal] = useState(value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button className="flex w-full items-center justify-between gap-2 h-[60px] px-4 rounded-lg bg-[#FBFBFB] border border-transparent hover:border-blue-200 transition-colors">
          <div className="flex items-center gap-1 min-w-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 14.17C9.87 14.17 8.13 12.44 8.13 10.3C8.13 8.16 9.87 6.44 12 6.44C14.13 6.44 15.87 8.17 15.87 10.31C15.87 12.45 14.13 14.17 12 14.17ZM12 7.94C10.7 7.94 9.63 9 9.63 10.31C9.63 11.62 10.69 12.68 12 12.68C13.31 12.68 14.37 11.62 14.37 10.31C14.37 9 13.3 7.94 12 7.94Z" fill="#292D32"/>
              <path d="M12 22.76C10.52 22.76 9.02999 22.2 7.86999 21.09C4.91999 18.25 1.65999 13.72 2.88999 8.33C3.99999 3.44 8.26999 1.25 12 1.25C12 1.25 12 1.25 12.01 1.25C15.74 1.25 20.01 3.44 21.12 8.34C22.34 13.73 19.08 18.25 16.13 21.09C14.97 22.2 13.48 22.76 12 22.76ZM12 2.75C9.08999 2.75 5.34999 4.3 4.35999 8.66C3.27999 13.37 6.23999 17.43 8.91999 20C10.65 21.67 13.36 21.67 15.09 20C17.76 17.43 20.72 13.37 19.66 8.66C18.66 4.3 14.91 2.75 12 2.75Z" fill="#292D32"/>
            </svg>
            <span className="text-[#141414] font-poppins text-base truncate">
              {value || "Местоположение"}
            </span>
          </div>
          <ChevronDown className="w-6 h-6 text-[#0E1C27] shrink-0" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-[380px] p-3" align="start">
        <div className="space-y-3">
          <p className="text-sm font-semibold text-gray-700">Выберите местоположение</p>
          <div className="flex gap-2">
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Введите адрес..."
              className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1572D3]"
            />
            <button
              onClick={() => { onChange(inputVal); setOpen(false); }}
              className="bg-[#1572D3] text-white px-3 py-2 rounded-lg text-sm font-medium"
            >
              OK
            </button>
          </div>
          <div className="rounded-lg overflow-hidden border" style={{ height: 260 }}>
            <iframe
              title="map"
              width="100%"
              height="260"
              src="https://www.openstreetmap.org/export/embed.html?bbox=37.62%2C55.72%2C37.68%2C55.76&layer=mapnik&marker=55.7376%2C37.642"
              style={{ border: 0 }}
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {["Москва, Таганская ул., 20", "Москва, Красная площадь", "Москва, Шереметьево"].map((addr) => (
              <button
                key={addr}
                onClick={() => { setInputVal(addr); onChange(addr); setOpen(false); }}
                className="text-xs bg-blue-50 hover:bg-blue-100 text-[#1572D3] px-2 py-1 rounded-full transition-colors"
              >
                {addr}
              </button>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

// ─── Car Card ─────────────────────────────────────────────────────────────────
interface CarCardProps {
  name: string;
  rating: number;
  reviews: string;
  passengers: number;
  transmission: string;
  ac: boolean;
  horsepower: number;
  price: string;
  image: string;
  isNew?: boolean;
}

function CarCard({
  name,
  rating,
  reviews,
  passengers,
  transmission,
  ac,
  horsepower,
  price,
  image,
  isNew,
}: CarCardProps) {
  return (
    <div className="relative bg-white rounded-2xl shadow-[0_12px_24px_rgba(16,76,139,0.16)] flex flex-col w-full max-w-[256px] mx-auto">
      {isNew && (
        <span className="absolute top-3 right-3 z-10 bg-[#10DF4E] text-white text-xs font-bold px-2 py-0.5 rounded-lg">
          new
        </span>
      )}
      <div className="h-40 relative overflow-visible flex items-end justify-center">
        <img
          src={image}
          alt={name}
          className="absolute -top-4 left-1/2 -translate-x-1/2 w-[90%] object-contain"
          style={{ maxHeight: 150 }}
        />
      </div>
      <div className="px-6 pb-6 flex flex-col gap-6 mt-2">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <p className="font-poppins font-medium text-base text-[#262626] leading-tight">{name}</p>
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 fill-[#EFBF14] text-[#EFBF14]" />
              <span className="font-poppins font-medium text-xs text-black">{rating}</span>
              <span className="font-poppins text-xs text-[#808080]">({reviews} отзыва)</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M9.99999 10.0001C12.3012 10.0001 14.1667 8.1346 14.1667 5.83341C14.1667 3.53223 12.3012 1.66675 9.99999 1.66675C7.69881 1.66675 5.83333 3.53223 5.83333 5.83341C5.83333 8.1346 7.69881 10.0001 9.99999 10.0001Z" stroke="#959595" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.1583 18.3333C17.1583 15.1083 13.95 12.5 10 12.5C6.05001 12.5 2.84167 15.1083 2.84167 18.3333" stroke="#959595" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="font-poppins text-xs text-[#959595]">{passengers} пассажиров</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="font-poppins text-xs text-[#959595]">{transmission}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-poppins text-xs text-[#959595]">Кондиционер</span>
              <span className="font-poppins text-xs text-[#959595]">{horsepower} л.с</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="h-px bg-[#E0E0E0]" />
          <div className="flex justify-between items-center">
            <span className="font-poppins text-sm text-[#595959]">Стоимость</span>
            <div>
              <span className="font-poppins font-semibold text-base text-[#292929]">{price} ₽</span>
              <span className="font-poppins text-sm text-[#9C9C9C]"> /сутки</span>
            </div>
          </div>
          <button className="flex items-center justify-center gap-2 w-full h-10 bg-[#1572D3] text-white rounded-lg font-poppins font-medium text-sm transition-opacity hover:opacity-90">
            Арендовать сейчас
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Booking Form ─────────────────────────────────────────────────────────────
function BookingForm() {
  const [location, setLocation] = useState("");
  const [pickupDate, setPickupDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [carType, setCarType] = useState("");
  const [pickupTime, setPickupTime] = useState("09:00");
  const [returnTime, setReturnTime] = useState("18:00");

  const [pickupDateOpen, setPickupDateOpen] = useState(false);
  const [returnDateOpen, setReturnDateOpen] = useState(false);
  const [carTypeOpen, setCarTypeOpen] = useState(false);
  const [pickupTimeOpen, setPickupTimeOpen] = useState(false);
  const [returnTimeOpen, setReturnTimeOpen] = useState(false);

  const carTypes = ["Кроссовер", "Седан", "Внедорожник"];

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20">
        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="flex flex-col items-start gap-2">
            <h2 className="font-montserrat font-medium text-2xl md:text-3xl text-[#141414]">
              Бронируйте прямо сейчас
            </h2>
            <div className="w-full h-1 rounded-full bg-[#1075DF]" />
          </div>
        </div>

        <div className="bg-[rgba(21,114,211,0.20)] rounded-2xl p-6 md:p-8 flex flex-col gap-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Location */}
            <LocationPicker value={location} onChange={setLocation} />

            {/* Pickup Date */}
            <Popover open={pickupDateOpen} onOpenChange={setPickupDateOpen}>
              <PopoverTrigger asChild>
                <button className="flex items-center justify-between gap-2 h-[60px] px-4 rounded-lg bg-[#FBFBFB] hover:border-blue-200 border border-transparent transition-colors">
                  <div className="flex items-center gap-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M8 5.75C7.59 5.75 7.25 5.41 7.25 5V2C7.25 1.59 7.59 1.25 8 1.25C8.41 1.25 8.75 1.59 8.75 2V5C8.75 5.41 8.41 5.75 8 5.75Z" fill="#292D32"/>
                      <path d="M16 5.75C15.59 5.75 15.25 5.41 15.25 5V2C15.25 1.59 15.59 1.25 16 1.25C16.41 1.25 16.75 1.59 16.75 2V5C16.75 5.41 16.41 5.75 16 5.75Z" fill="#292D32"/>
                      <path d="M20.5 9.83997H3.5C3.09 9.83997 2.75 9.49997 2.75 9.08997C2.75 8.67997 3.09 8.33997 3.5 8.33997H20.5C20.91 8.33997 21.25 8.67997 21.25 9.08997C21.25 9.49997 20.91 9.83997 20.5 9.83997Z" fill="#292D32"/>
                      <path d="M16 22.75H8C4.35 22.75 2.25 20.65 2.25 17V8.5C2.25 4.85 4.35 2.75 8 2.75H16C19.65 2.75 21.75 4.85 21.75 8.5V17C21.75 20.65 19.65 22.75 16 22.75ZM8 4.25C5.14 4.25 3.75 5.64 3.75 8.5V17C3.75 19.86 5.14 21.25 8 21.25H16C18.86 21.25 20.25 19.86 20.25 17V8.5C20.25 5.64 18.86 4.25 16 4.25H8Z" fill="#292D32"/>
                    </svg>
                    <span className="font-poppins text-base text-[#141414]">
                      {pickupDate ? format(pickupDate, "dd.MM.yyyy") : "Дата получения"}
                    </span>
                  </div>
                  <ChevronDown className="w-6 h-6 text-[#0E1C27] shrink-0" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={pickupDate}
                  onSelect={(d) => { setPickupDate(d); setPickupDateOpen(false); }}
                  initialFocus
                  classNames={{
                    day_selected: "bg-[#1572D3] text-white hover:bg-[#1572D3] hover:text-white focus:bg-[#1572D3] focus:text-white",
                  }}
                />
              </PopoverContent>
            </Popover>

            {/* Return Date */}
            <Popover open={returnDateOpen} onOpenChange={setReturnDateOpen}>
              <PopoverTrigger asChild>
                <button className="flex items-center justify-between gap-2 h-[60px] px-4 rounded-lg bg-[#FBFBFB] hover:border-blue-200 border border-transparent transition-colors">
                  <div className="flex items-center gap-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M8 5.75C7.59 5.75 7.25 5.41 7.25 5V2C7.25 1.59 7.59 1.25 8 1.25C8.41 1.25 8.75 1.59 8.75 2V5C8.75 5.41 8.41 5.75 8 5.75Z" fill="#292D32"/>
                      <path d="M16 5.75C15.59 5.75 15.25 5.41 15.25 5V2C15.25 1.59 15.59 1.25 16 1.25C16.41 1.25 16.75 1.59 16.75 2V5C16.75 5.41 16.41 5.75 16 5.75Z" fill="#292D32"/>
                      <path d="M20.5 9.83997H3.5C3.09 9.83997 2.75 9.49997 2.75 9.08997C2.75 8.67997 3.09 8.33997 3.5 8.33997H20.5C20.91 8.33997 21.25 8.67997 21.25 9.08997C21.25 9.49997 20.91 9.83997 20.5 9.83997Z" fill="#292D32"/>
                      <path d="M16 22.75H8C4.35 22.75 2.25 20.65 2.25 17V8.5C2.25 4.85 4.35 2.75 8 2.75H16C19.65 2.75 21.75 4.85 21.75 8.5V17C21.75 20.65 19.65 22.75 16 22.75ZM8 4.25C5.14 4.25 3.75 5.64 3.75 8.5V17C3.75 19.86 5.14 21.25 8 21.25H16C18.86 21.25 20.25 19.86 20.25 17V8.5C20.25 5.64 18.86 4.25 16 4.25H8Z" fill="#292D32"/>
                    </svg>
                    <span className="font-poppins text-base text-[#141414]">
                      {returnDate ? format(returnDate, "dd.MM.yyyy") : "Дата возврата"}
                    </span>
                  </div>
                  <ChevronDown className="w-6 h-6 text-[#0E1C27] shrink-0" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={returnDate}
                  onSelect={(d) => { setReturnDate(d); setReturnDateOpen(false); }}
                  initialFocus
                  disabled={(date) => pickupDate ? date < pickupDate : false}
                  classNames={{
                    day_selected: "bg-[#1572D3] text-white hover:bg-[#1572D3] hover:text-white focus:bg-[#1572D3] focus:text-white",
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Car Type */}
            <Popover open={carTypeOpen} onOpenChange={setCarTypeOpen}>
              <PopoverTrigger asChild>
                <button className="flex items-center justify-between gap-2 h-[60px] px-4 rounded-lg bg-[#FBFBFB] hover:border-blue-200 border border-transparent transition-colors">
                  <div className="flex items-center gap-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M19.9996 11.7501H3.9996C3.7696 11.7501 3.5596 11.6501 3.4196 11.4701C3.2796 11.3001 3.2196 11.0601 3.2696 10.8401L4.3996 5.44008C4.7696 3.69008 5.5196 2.08008 8.4896 2.08008H15.5196C18.4896 2.08008 19.2396 3.70008 19.6096 5.44008L20.7396 10.8501C20.7896 11.0701 20.7296 11.3001 20.5896 11.4801C20.4396 11.6501 20.2296 11.7501 19.9996 11.7501Z" fill="#292D32"/>
                      <path d="M19.9596 22.7501H18.0796C16.4596 22.7501 16.1496 21.8201 15.9496 21.2101L15.7496 20.6101C15.4896 19.8501 15.4596 19.7501 14.5596 19.7501H9.4396C8.5396 19.7501 8.4796 19.9201 8.2496 20.6101L8.0496 21.2101C7.8396 21.8301 7.5396 22.7501 5.9196 22.7501H4.0396C3.2496 22.7501 2.4896 22.4201 1.9596 21.8401C1.4396 21.2701 1.1896 20.5101 1.2596 19.7501L1.8196 13.6601C1.9696 12.0101 2.4096 10.2501 5.6196 10.2501H18.3796C21.5896 10.2501 22.0196 12.0101 22.1796 13.6601L22.7396 19.7501C22.8096 20.5101 22.5596 21.2701 22.0396 21.8401C21.5096 22.4201 20.7496 22.7501 19.9596 22.7501Z" fill="#292D32"/>
                    </svg>
                    <span className="font-poppins text-base text-[#141414]">
                      {carType || "Тип автомобиля"}
                    </span>
                  </div>
                  <ChevronDown className="w-6 h-6 text-[#0E1C27] shrink-0" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-48 p-2" align="start">
                {carTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => { setCarType(type); setCarTypeOpen(false); }}
                    className={cn(
                      "flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-sm font-poppins transition-colors",
                      carType === type
                        ? "bg-[#1572D3] text-white"
                        : "hover:bg-blue-50 text-gray-700"
                    )}
                  >
                    {type}
                    {carType === type && <Check className="w-4 h-4" />}
                  </button>
                ))}
              </PopoverContent>
            </Popover>

            {/* Pickup Time */}
            <Popover open={pickupTimeOpen} onOpenChange={setPickupTimeOpen}>
              <PopoverTrigger asChild>
                <button className="flex items-center justify-between gap-2 h-[60px] px-4 rounded-lg bg-[#FBFBFB] hover:border-blue-200 border border-transparent transition-colors">
                  <div className="flex items-center gap-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#292D32"/>
                      <path d="M15.71 15.93C15.58 15.93 15.45 15.9 15.33 15.82L12.23 13.97C11.46 13.51 10.89 12.5 10.89 11.61V7.51001C10.89 7.10001 11.23 6.76001 11.64 6.76001C12.05 6.76001 12.39 7.10001 12.39 7.51001V11.61C12.39 11.97 12.69 12.5 13 12.68L16.1 14.53C16.46 14.74 16.57 15.2 16.36 15.56C16.21 15.8 15.96 15.93 15.71 15.93Z" fill="#292D32"/>
                    </svg>
                    <span className="font-poppins text-base text-[#141414]">{pickupTime || "Время получения"}</span>
                  </div>
                  <ChevronDown className="w-6 h-6 text-[#0E1C27] shrink-0" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <TimePicker value={pickupTime} onChange={(v) => { setPickupTime(v); }} />
                <div className="px-3 pb-3">
                  <button
                    onClick={() => setPickupTimeOpen(false)}
                    className="w-full bg-[#1572D3] text-white py-2 rounded-lg text-sm font-medium"
                  >
                    Выбрать {pickupTime}
                  </button>
                </div>
              </PopoverContent>
            </Popover>

            {/* Return Time */}
            <Popover open={returnTimeOpen} onOpenChange={setReturnTimeOpen}>
              <PopoverTrigger asChild>
                <button className="flex items-center justify-between gap-2 h-[60px] px-4 rounded-lg bg-[#FBFBFB] hover:border-blue-200 border border-transparent transition-colors">
                  <div className="flex items-center gap-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#292D32"/>
                      <path d="M15.71 15.93C15.58 15.93 15.45 15.9 15.33 15.82L12.23 13.97C11.46 13.51 10.89 12.5 10.89 11.61V7.51001C10.89 7.10001 11.23 6.76001 11.64 6.76001C12.05 6.76001 12.39 7.10001 12.39 7.51001V11.61C12.39 11.97 12.69 12.5 13 12.68L16.1 14.53C16.46 14.74 16.57 15.2 16.36 15.56C16.21 15.8 15.96 15.93 15.71 15.93Z" fill="#292D32"/>
                    </svg>
                    <span className="font-poppins text-base text-[#141414]">{returnTime || "Время возврата"}</span>
                  </div>
                  <ChevronDown className="w-6 h-6 text-[#0E1C27] shrink-0" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <TimePicker value={returnTime} onChange={(v) => { setReturnTime(v); }} />
                <div className="px-3 pb-3">
                  <button
                    onClick={() => setReturnTimeOpen(false)}
                    className="w-full bg-[#1572D3] text-white py-2 rounded-lg text-sm font-medium"
                  >
                    Выбрать {returnTime}
                  </button>
                </div>
              </PopoverContent>
            </Popover>

            {/* Book Button */}
            <button className="h-[60px] bg-[#1572D3] text-white rounded-lg font-poppins font-semibold text-xl hover:opacity-90 transition-opacity">
              Забронировать
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Brands ───────────────────────────────────────────────────────────────────
function Brands() {
  return (
    <section className="py-12 md:py-16 w-full flex items-center justify-center">
      <img
        src="./images/assets_2f908738b06245ae853e48a3298fd087_8aa81f44832541169282cd3acb910a69.webp"
        alt="Brands"
        className="w-screen h-auto object-contain"
        style={{ filter: "contrast(1.2) brightness(1.05)" }}
      />
    </section>
  );
}

// ─── Header ───────────────────────────────────────────────────────────────────
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20 h-[83px] flex items-center justify-between">
        <WoopLogo />

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {["Онлайн-бронирование", "Услуги", "Наш Автопарк", "Контакты"].map((item) => (
            <a
              key={item}
              href="#"
              className="font-poppins font-bold text-base text-[#484848] hover:text-[#1572D3] transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <a href="#" className="font-poppins font-bold text-base text-[#484848] hover:text-[#1572D3]">
            Регистрация
          </a>
          <button className="bg-[#1572D3] text-white font-poppins font-bold text-base px-8 py-4 rounded-lg hover:opacity-90 transition-opacity">
            Войти
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t px-4 py-4 flex flex-col gap-4">
          {["Онлайн-бронирование", "Услуги", "Наш Автопарк", "Контакты"].map((item) => (
            <a
              key={item}
              href="#"
              className="font-poppins font-bold text-base text-[#484848] hover:text-[#1572D3]"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="flex gap-4 pt-2">
            <a href="#" className="font-poppins font-bold text-base text-[#484848]">Регистрация</a>
            <button className="bg-[#1572D3] text-white font-poppins font-bold text-base px-6 py-2 rounded-lg">Войти</button>
          </div>
        </div>
      )}
    </header>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative bg-white overflow-hidden min-h-[700px] flex items-center">
      {/* Background decorations */}
      <img
        src="./images/assets_2f908738b06245ae853e48a3298fd087_5bb479b7b07c446b9d675db4d0dfedb8.webp"
        alt=""
        aria-hidden
        className="absolute pointer-events-none"
        style={{ width: 707, height: 537, transform: "rotate(156.39deg)", opacity: 0.6, right: -100, top: 0 }}
      />
      <img
        src="./images/assets_2f908738b06245ae853e48a3298fd087_636a1aed3de54d569b81ff787d9770b8.webp"
        alt=""
        aria-hidden
        className="absolute pointer-events-none"
        style={{ width: 634, height: 576, transform: "rotate(-12.107deg)", opacity: 0.5, right: 0, top: 0 }}
      />

      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20 w-full py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left content */}
        <div className="flex flex-col gap-12 z-10 relative">
          <div className="relative">
            <h1 className="font-barlow font-bold text-4xl md:text-5xl lg:text-[56px] leading-[100%]">
              <span className="text-[#1572D3]">Легкость</span>
              <br />
              <span className="text-black">в поиске, бронировании и аренде автомобиля!</span>
            </h1>
            <div
              className="absolute"
              style={{ width: 277, height: 4, background: "#1075DF", borderRadius: 2, top: 50, left: 0 }}
            />
          </div>

          <p className="font-poppins text-lg text-[#272727] max-w-[390px]">
            Приобретайте автомобиль в любом месте и в любое время, когда вам это нужно, с помощью вашего устройства IOS или Android.
          </p>

          <div className="flex items-center gap-3">
            <img
              src="./images/922f28fba55b28cadf9a176e80d709f4be6b73c2.png"
              alt="App Store"
              className="h-9 rounded-lg object-contain"
            />
            <img
              src="./images/16bb703ec8f7f2c5adf4d035362e6eef8107da89.png"
              alt="Google Play"
              className="h-9 rounded-lg object-contain"
            />
          </div>
        </div>

        {/* Right: Car image */}
        <div className="relative flex items-center justify-center z-10 -mr-[50%] lg:-mr-[25%]">
          <img
            src="./images/36577-5-mercedes-benz-free-download.png"
            alt="Car"
            className="max-w-[700px] object-contain drop-shadow-xl self-stretch"
          />
        </div>
      </div>
    </section>
  );
}

// ─── Why Choose Us ────────────────────────────────────────────────────────────
function WhyChooseUs() {
  const features = [
    {
      icon: "./images/20506789fc088672720cc973296b60a20db323cb.png",
      title: "Лучшая цена гарантирована",
      desc: "Найдете более низкую цену?\nМы вернем вам 100% разницы.",
    },
    {
      icon: "./images/31724683c7dce67b07819c6686b594a70a9dca9b.png",
      title: "Опытный водитель",
      desc: "У вас нет водителя? Не волнуйтесь, у нас есть много опытных водителей для вас.",
    },
    {
      icon: "./images/4957cf1b55de7a3081e9a2f17b49a3b1baef1afc.png",
      title: "24-часовая доставка автомобиля",
      desc: "Закажите свой автомобиль в любое время, и мы доставим его непосредственно к вам.",
    },
    {
      icon: "./images/aa219b7b89925734d291020419642b5ef359023d.png",
      title: "Круглосуточная техническая поддержка",
      desc: "У вас есть вопросы? Обращайтесь в службу поддержки Rentcars в любое время.",
    },
  ];

  return (
    <section className="relative bg-white overflow-hidden py-16 md:py-24">
      {/* Background decorations */}

      <img
        src="./images/assets_2f908738b06245ae853e48a3298fd087_b186750866ff4fbb8fcfdbefa1c0fed6 (1).webp"
        alt=""
        aria-hidden
        className="absolute pointer-events-none"
        style={{ width: 731, height: 538, opacity: 0.5, left: -84, top: 141 }}
      />

      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left: Car image */}
        <div className="relative flex items-center justify-center -ml-[100%] lg:-ml-[50%]">
          <img
            src="./images/why-choose-shayar.webp"
            alt="Audi"
            className="w-full max-w-[800px] object-contain drop-shadow-xl"
          />
        </div>

        {/* Right: Features */}
        <div className="flex flex-col gap-10">
          <div>
            <h2 className="font-poppins font-extrabold text-3xl md:text-4xl leading-[130%]">
              <span className="text-[#333333]">Мы предлагаем{" "}</span>
              <span className="text-[#1075DF]">лучшие предложения</span>
              <span className="text-[#333333]">{" "}по аренде автомобилей</span>
            </h2>
          </div>

          <div className="flex flex-col gap-10">
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-6">
                <img src={f.icon} alt="" className="w-16 h-16 shrink-0 object-contain" />
                <div className="flex flex-col gap-3">
                  <p className="font-poppins font-medium text-xl text-black">{f.title}</p>
                  <p className="font-poppins text-base text-[#6D6D6D] whitespace-pre-line">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Car Fleet ────────────────────────────────────────────────────────────────
function CarFleet() {
  const cars: CarCardProps[] = [
    {
      name: "Skoda Octavia III rest.",
      rating: 4.8,
      reviews: "2.436",
      passengers: 5,
      transmission: "Автомат",
      ac: true,
      horsepower: 110,
      price: "4 465",
      image: "./images/d89e451fb9fe7d6cb61d5a09b612c06163c945e7.png",
    },
    {
      name: "BMW 218 M Sport Pro",
      rating: 4.9,
      reviews: "1.554",
      passengers: 5,
      transmission: "Автомат",
      ac: true,
      horsepower: 140,
      price: "7 315",
      image: "./images/678b64b20414e92363745d953152bde154c64e97.png",
    },
    {
      name: "Geely Preface Flagship",
      rating: 4.8,
      reviews: "2.436",
      passengers: 5,
      transmission: "Автомат",
      ac: true,
      horsepower: 200,
      price: "7 040",
      image: "./images/9668716e3f387b488cd9f219598f5896f5d5e9a1.png",
    },
    {
      name: "GAC Trumpchi M8 I",
      rating: 4.8,
      reviews: "2.436",
      passengers: 7,
      transmission: "Автомат",
      ac: true,
      horsepower: 252,
      price: "11 305",
      image: "./images/93b37e45721a6872cacc670ce3c203fe6847d781.png",
      isNew: true,
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20">
        <div className="flex flex-col items-center gap-2 mb-12">
          <h2 className="font-montserrat font-medium text-2xl md:text-3xl text-[#141414]">Наш Автопарк</h2>
          <div className="w-full max-w-[245px] h-1 rounded-full bg-[#1075DF]" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
          {cars.map((car) => (
            <CarCard key={car.name} {...car} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="flex items-center gap-2 px-8 py-3 border border-[#E0E0E0] rounded-lg font-poppins font-medium text-sm text-[#4E4E4E] hover:border-[#1572D3] hover:text-[#1572D3] transition-colors">
            Показать все транспортные средства
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── Find A Car Section ───────────────────────────────────────────────────────
function FindCar() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20 text-center">
        <h2 className="font-sora font-extrabold text-4xl md:text-5xl lg:text-[56px] leading-[120%] uppercase mb-6">
          <span className="text-black">Найдите подходящий{"\n"}</span>
          <span className="text-[#1572D3]">для вас</span>
          <span className="text-black"> автомобиль.</span>
        </h2>
        <p className="font-sora text-xl md:text-2xl text-black max-w-[690px] mx-auto leading-[25px]">
          От купе с жесткой крышей до внедорожников с откидным верхом. Ознакомьтесь со всем нашим автопарком для получения дополнительной информации.
        </p>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
function Testimonials() {
  const testimonials = [
    {
      rating: "5.0",
      text: "Я пользуюсь вашими услугами уже 3 года. У вас отличный сервис, я буду продолжать пользоваться вашим сервисом.",
      name: "Анна Фролова",
      location: "",
      image: "./images/assets_2f908738b06245ae853e48a3298fd087_65e740f3a6ad4db1891ba455fe7c1d1f.webp",
    },
    {
      rating: "5.0",
      text: "Я чувствую себя в полной безопасности, когда пользуюсь услугами WOOP. Ваша команда по работе с клиентами полна энтузиазма, а водитель всегда приезжает вовремя.",
      name: "Роман Иванов",
      location: "",
      image: "./images/f7c1bab798d7372d0d897ea1f4c584ea4d1b48e0.png",
    },
    {
      rating: "5.0",
      text: '"I feel very secure when using caretall\'s services. Your customer care team is very enthusiastic and the driver is always on time."',
      name: "Charlie Johnson",
      location: "From New York, US",
      image: "./images/5223e919423011a53b0c2bebfa09edd1c4943dac.png",
    },
  ];

  return (
    <section className="bg-[#CFE3F9] py-16 md:py-24 overflow-hidden relative">
      {/* Decorative elements */}
      <img
        src="./images/e6b48a8e144494a9b394f7c000dd5fc354b770d5.png"
        alt=""
        aria-hidden
        className="absolute pointer-events-none opacity-10 w-[292px] h-[310px]"
        style={{ left: 137, top: 90 }}
      />
      <img
        src="./images/feb864939875b6676d2e9a0049022626d06833cd.png"
        alt=""
        aria-hidden
        className="absolute pointer-events-none opacity-10 w-[279px] h-[297px]"
        style={{ right: 0, top: -70 }}
      />

      {/* Quote marks decorations */}
      <img
        src="./images/assets_2f908738b06245ae853e48a3298fd087_4c54d2ab20dd401aa3e9268bd8eed2d0.webp"
        alt=""
        aria-hidden
        className="absolute pointer-events-none w-[100px] h-[100px] md:w-[150px] md:h-[150px]"
        style={{ left: 20, top: 50 }}
      />
      <img
        src="./images/assets_2f908738b06245ae853e48a3298fd087_0477670fa36043bba61bdabb016c77ee.webp"
        alt=""
        aria-hidden
        className="absolute pointer-events-none w-[100px] h-[100px] md:w-[150px] md:h-[150px]"
        style={{ right: 20, bottom: 50 }}
      />

      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20 relative z-10">
        <h2 className="font-poppins font-extrabold text-3xl md:text-[38px] text-[#333333] text-center mb-16 leading-[130%]">
          Отзывы наших клиентов
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-[0_12px_24px_rgba(16,76,139,0.16)] overflow-hidden flex flex-col md:flex-row"
            >
              {/* Image side */}
              {t.image ? (
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full md:w-[160px] h-48 md:h-auto object-cover shrink-0"
                />
              ) : (
                <div className="w-full md:w-[160px] h-48 md:h-auto bg-[#D9D9D9] shrink-0" />
              )}

              {/* Content */}
              <div className="flex flex-col justify-center gap-8 p-6 md:p-8">
                <div className="flex flex-col gap-4">
                  <p className="font-poppins font-medium text-4xl text-[#383838]">{t.rating}</p>
                  <StarRating />
                </div>
                <div className="flex flex-col gap-6">
                  <p className="font-poppins text-base text-[#282828] leading-[150%]">{t.text}</p>
                  <div>
                    <p className="font-poppins font-semibold text-lg text-[#252525]">{t.name}</p>
                    {t.location && (
                      <p className="font-poppins text-sm text-[#282828]">{t.location}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Download App ─────────────────────────────────────────────────────────────
function DownloadApp() {
  return (
    <section className="relative bg-white overflow-hidden py-0">
      <img
        src="./images/assets_2f908738b06245ae853e48a3298fd087_e232073aa03d486086c39474f09d00b1.webp"
        alt=""
        aria-hidden
        className="absolute pointer-events-none"
        style={{ width: 612, height: 464, transform: "rotate(156.39deg)", opacity: 0.6, right: -100, top: 200 }}
      />
      <img
        src="./images/assets_2f908738b06245ae853e48a3298fd087_630bcb9961244d9d96fa07213b0694ef.webp"
        alt=""
        aria-hidden
        className="absolute pointer-events-none"
        style={{ width: 548, height: 498, transform: "rotate(-12.107deg)", opacity: 0.5, left: -100, top: 200 }}
      />

      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left */}
        <div className="flex flex-col gap-8">
          <img
            src="./images/54dde1981734900d6931f31a78f5493346417534.png"
            alt="WOOP"
            className="h-9 object-contain self-start"
          />
          <h2 className="font-poppins font-semibold text-4xl md:text-[48px] leading-[120%]">
            <span className="text-[#282828]">Скачайте приложение{" "}</span>
            <span className="text-[#1572D3]">бесплатно</span>
          </h2>
          <p className="font-poppins text-base text-[#3E3E3E] max-w-[453px]">
            <span className="text-[#1075DF] font-medium">10%</span> скидка на первый заказ через приложение по промокоду "mobile"
          </p>
          <div className="flex items-center gap-4">
            <img
              src="./images/87281a42e4012fe1d1d2723abfcc79070d5fe07a.png"
              alt="App Store"
              className="h-12 rounded-xl object-contain"
            />
            <img
              src="./images/0f883083ac97ded3c2e73a2472609bfc8d190b67.png"
              alt="Google Play"
              className="h-12 rounded-xl object-contain"
            />
          </div>
        </div>

        {/* Right: Phone mockup */}
        <div className="relative flex items-center justify-center lg:justify-center -mr-[100px] lg:-mr-[150px]">
          <div className="relative" style={{ width: 900, height: 1000 }}>
            <img
              src="./images/psd_black_smartphone_with_blank_screen_isolated2.png"
              alt="App mockup"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[#1075DF] text-white pt-10 pb-8">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Column 1: Contact */}
          <div className="flex flex-col gap-6">
            <img
              src="./images/5a620dd69dc35c5e671fdc8f889714fd506fcf5a.png"
              alt="WOOP"
              className="h-6 object-contain self-start"
            />
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <img
                  src="./images/80298e4192fedc64fa8a37d931ea3176f5fa7302.png"
                  alt=""
                  className="w-5 h-5"
                />
                <span className="font-poppins text-sm">с 10.00 до 22.00 без выходных</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                <span className="font-poppins text-sm">Таганская ул., 20, Москва, 113956</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 shrink-0" />
                <span className="font-poppins text-sm">+7 (915) 769-17-65</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 shrink-0" />
                <span className="font-poppins text-sm">woopcars@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Column 2: empty/spacer on large */}
          <div className="hidden lg:block" />

          {/* Column 3: Information */}
          <div className="flex flex-col gap-6">
            <p className="font-poppins font-bold text-base">Информация</p>
            <div className="flex flex-col gap-4">
              {["О нас", "Условия аренды", "Наш автопарк", "Отзывы"].map((item) => (
                <a key={item} href="#" className="font-poppins text-base hover:underline">{item}</a>
              ))}
            </div>
          </div>

          {/* Column 4: Help + Social */}
          <div className="flex flex-col gap-6">
            <p className="font-poppins font-bold text-base">Помощь</p>
            <div className="flex flex-col gap-4">
              {["FAQ", "Страховка", "Платежи", "ГИБДД"].map((item) => (
                <a key={item} href="#" className="font-poppins text-base hover:underline">{item}</a>
              ))}
            </div>
            <div className="flex gap-3 pt-2">
              {[
                "./images/ea02d4e615db300936cb705cfea9926ddef4b044.png",
                "./images/daae33d3e8756353c8653adbe1d3ecf3602e0a68.png",
                "./images/b542fea896f5dbff753b2d2733029195d4338042.png",
                "./images/36e75943bdcfeeec7a9999ac4fe38b4405abdc47.png",
              ].map((src, i) => (
                <a key={i} href="#" className="w-8 h-8">
                  <img src={src} alt="Social" className="w-8 h-8 object-contain" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6">
          <p className="font-poppins text-xs">Copyright 2026 ・ Rentcars, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <BookingForm />
      <Brands />
      <WhyChooseUs />
      <CarFleet />
      <FindCar />
      <Testimonials />
      <DownloadApp />
      <Footer />
    </div>
  );
}
