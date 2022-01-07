
export default function Home(props) {
  console.log(props)
  return (
    <>
    
    </>
  )
}


export async function getStaticProps(context) {


  const page = await fetch('https://craft-next-test.test/api', {
    method: 'POST',
    body: `{entry(section: "frontpage", limit: 1) {
      id
      title
      slug
    }}`,
    headers: {
        'Content-Type': 'application/graphql',
        Authorization: `Bearer D4_vPMKLh2mSIp1ZlMnxkgGOKrLwZ_zj`,
    },
  });

  if (page.status !== 200) {
      console.log(await page.text());
      throw new Error('Failed to fetch API');
  }

  const json = await page.json();

  if (json.errors) {
      throw new Error(`Found errors in response: ${JSON.stringify(json.errors)}`);
  }

  return {
      props : json
  }
}