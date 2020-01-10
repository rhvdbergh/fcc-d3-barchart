import * as d3 from 'd3';

fetch(
  'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json'
)
  .then(data => data.json())
  .then(data => {
    const dataset = data.data;
    console.log(dataset);
    console.log([d3.min(dataset, d => d[1]), d3.max(dataset, d => d[1])]);

    const svg = d3
      .select('body')
      .append('svg')
      .attr('width', 400)
      .attr('height', 400);

    svg.append('title').attr('id', 'title');

    const scaleX = d3
      .scaleLinear()
      .domain([d3.min(dataset, d => d[0]), d3.max(dataset, d => d[0])])
      .range([0, 20]);

    const scaleY = d3
      .scaleLinear()
      .domain([d3.min(dataset, d => d[1]), d3.max(dataset, d => d[1])])
      .range([0, 400]);

    let axisBottom = d3.axisBottom(scaleX);
    let axisLeft = d3.axisLeft(scaleY);

    svg
      .append('g')
      .attr('id', 'y-axis')
      .attr('transform', 'translate(30, 0)')
      .call(axisBottom);

    svg
      .append('g')
      .attr('id', 'x-axis')
      .attr('transform', 'translate(0, 30)')
      .call(axisLeft);
  });
