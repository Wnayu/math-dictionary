document.addEventListener("nav", () => {
  const launch = document.querySelector<HTMLButtonElement>("[data-dictionary-search]")
  if (!launch) return
  const open = () => document.querySelector<HTMLButtonElement>(".search > .search-button")?.click()
  launch.addEventListener("click", open)
  window.addCleanup(() => launch.removeEventListener("click", open))
})
