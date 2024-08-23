export default function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Círculo grande en la esquina superior izquierda */}
      <div className="fixed border-[2px] border-[#cb99c9] top-0 left-0 size-[60rem] rounded-full opacity-10 transform -translate-x-1/2 -translate-y-1/2"></div>

      {/* Círculo grande en la esquina inferior derecha */}
      <div className="fixed border-[2px] border-[#cb99c9] bottom-0 right-0 size-[80rem] rounded-full opacity-10 transform translate-x-1/2 translate-y-1/2"></div>
    </div>
  );
}
