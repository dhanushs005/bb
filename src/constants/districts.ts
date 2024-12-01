export const TAMIL_NADU_DISTRICTS = [
  'Ariyalur', 'Chennai', 'Coimbatore', 'Cuddalore', 'Dharmapuri', 
  'Dindigul', 'Erode', 'Kanchipuram', 'Kanyakumari', 'Karur', 
  'Krishnagiri', 'Madurai', 'Nagapattinam', 'Namakkal', 'Nilgiris', 
  'Perambalur', 'Pudukkottai', 'Ramanathapuram', 'Salem', 'Sivaganga', 
  'Thanjavur', 'Theni', 'Thoothukudi', 'Tiruchirappalli', 'Tirunelveli', 
  'Tiruppur', 'Tiruvallur', 'Tiruvannamalai', 'Tiruvarur', 'Vellore', 
  'Viluppuram', 'Virudhunagar'
] as const;

export type District = typeof TAMIL_NADU_DISTRICTS[number];