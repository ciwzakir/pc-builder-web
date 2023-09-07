// pages/index.js

import RootLayout from "@/components/Layouts/RootLayout";

function CategoriesPage({ categories }) {
  return (
    <div>
      <ul>
        <li>categories={categories} </li>
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const response = await fetch("http://localhost:3000/pcdata/category");
    const categories = await response.json();

    return {
      props: {
        categories,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        categories: [],
      },
    };
  }
}

export default CategoriesPage;
CategoriesPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
