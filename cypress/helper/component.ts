/**
 * Format string to ID.
 * @sample Date of Birth -> date_of_birth
 * @sample Pag-ibig -> pag_ibig
 */
export const formatToId = (s: string) => s.replaceAll(' ', '_').replaceAll('-', '_').toLowerCase();

/**
 * Format any array to ID.
 * @sample ("Date of Birth", "sub_link") -> date_of_birth_sub_link
 * @sample ("Pag-ibig", "Setup Manager", "navigation_link") -> pag_ibig_setup_manager_navigation_link
 */
export const transformToId = (...args: any[])=> {
  const names = args.map(name => formatToId(String(name)));
  return names.join("_");
}