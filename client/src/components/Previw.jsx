import { useLocation } from 'react-router-dom';
export default function Previw() {
  const location = useLocation();
  const { text, title } = location.state?.post || {};
  document.title = title;
  return <div>{text}</div>;
}
