export const useUpperCase = (title: string) => {
  return title?.charAt(0).toLocaleUpperCase() + title!.slice(1);
};
