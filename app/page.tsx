import SearchComponent from "@/components/search-component";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 font-sans" dir="rtl">
          جستجو پس از توقف تایپ کاربر انجام می‌شود و اگر ورودی خالی باشد، همه
          آیتم‌ها نمایش داده می‌شوند.
        </h1>
        <SearchComponent />
      </div>
    </main>
  );
}
