export function prefix(location, ...prefixes) {
  return prefixes.some(
    prefix => (
      location.href.indexOf(`${location.origin}/${prefix}`) !== -1
    )
  )
}

export function navbar(location) {
  return true
}

export function apm(location) {
  return prefix(location, 'apm')
}

export function marketplace(location) {
  return prefix(location, 'marketplace')
}
