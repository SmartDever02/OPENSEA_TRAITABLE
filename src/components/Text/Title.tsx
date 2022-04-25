export default function Title(prop: any) {
  console.log('mbottom', prop.mBottom);
  return (
    <div className='text-title' style={{ marginBottom: prop.mBottom }}>
      {prop.children}
    </div>
  );
}
