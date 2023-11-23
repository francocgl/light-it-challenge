const parseDateFormat = (dateString: string) => {
  return new Date(dateString).toLocaleString()
}

export default parseDateFormat
