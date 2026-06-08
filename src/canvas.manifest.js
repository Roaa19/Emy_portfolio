export const manifest = {
  screens: {
    scr_tr14c4: { name: "Hero", route: "/", position: { "x": 160, "y": 220 } },
    scr_vnwyxw: { name: "About Me", route: "/#about", position: { "x": 1560, "y": 220 } },
    scr_396ce9: { name: "Skills", route: "/#skills", position: { "x": 2960, "y": 220 } },
    scr_6pg93d: { name: "Projects", route: "/#projects", position: { "x": 4360, "y": 220 } },
    scr_p119lj: { name: "Contact", route: "/#contact", position: { "x": 5760, "y": 220 } }
  },
  sections: {
    sec_u13sah: { name: "Landing Page Flow", x: 0, y: 0, width: 7120, height: 1180 }
  },
  layers: [
  { kind: "section", id: "sec_u13sah", children: [
    { kind: "screen", id: "scr_tr14c4" },
    { kind: "screen", id: "scr_vnwyxw" },
    { kind: "screen", id: "scr_396ce9" },
    { kind: "screen", id: "scr_6pg93d" },
    { kind: "screen", id: "scr_p119lj" }]
  }]

};