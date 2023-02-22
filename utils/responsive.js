const handleResponsivity = (sizes, displayClass, length, index) => {
  return sizes.lg > -1 && index >= sizes.lg && index < length
    ? "hidden"
    : index >= sizes.md && index < length
    ? `lg:${displayClass} hidden `
    : index > sizes.sm - 1 && index < sizes.md
    ? `md:${displayClass} hidden `
    : "";
};

export default handleResponsivity;
