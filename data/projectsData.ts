interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Tiki Recommender ETL Pipeline',
    description: `End-to-end ETL data pipeline that automatically scrapes data from Tiki.vn, stores it in MinIO (data
    lake), transforms data and trains the model using Apache Spark, and loads the processed data into PostgreSQL
    (data warehouse), orchestrated by Dagster and containerized with Docker.`,
    imgSrc: '/static/images/tiki-etl/tiki.png',
    href: '/blog/tiki-recommender-etl-pipeline',
  },
  {
    title: 'Comprehensive Performance Analysis between Hadoop and Spark',
    description: `This study developed a fully distributed system on Linux virtual machines using Hadoop and Spark,
    benchmarking various parameters to optimize performance and evaluate the efficiency of Apache Hadoop and
    Apache Spark in large-scale data processing.`,
    imgSrc: '/static/images/tiki-etl/cover.png',
    href: 'https://github.com/nchn471/performance-analysis-hadoop-spark',
  },
  {
    title: 'Developer Salary Prediction Website',
    description: `A machine learning project that predicts developer salaries based on experience, country, education,
    and technology stack. The project also includes visualizations to analyze developer’s market trends using the
    Stack Overflow 2023 Survey Dataset.`,
    imgSrc: '/static/images/cover3.jpg',
    href: 'https://github.com/nchn471/Developer-Salary-Prediction',
  },
]

export default projectsData
