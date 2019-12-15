import React from 'react';
function ProjectContainer(props) {
    console.log('project container')
    return(
        <div class="sixteen wide column">
          <table class="ui celled structured table">
            <thead>
              <tr>
                <th rowspan="2">Porject Name</th>
                <th rowspan="2">Type</th>
                <th rowspan="2">Files</th>
                <th colspan="3">Languages</th>
              </tr>
              <tr>
                <th>Ruby</th>
                <th>JavaScript</th>
                <th>Python</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alpha Team</td>
                <td>Project 1</td>
                <td>2</td>
                <td>
                  <i class="large green checkmark icon"></i>
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td rowspan="3">Beta Team</td>
                <td>Project 1</td>
                <td>52</td>
                <td>
                  <i class="large green checkmark icon"></i>
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Project 2</td>
                <td>12</td>
                <td></td>
                <td>
                  <i class="large green checkmark icon"></i>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>Project 3</td>
                <td>21</td>
                <td>
                  <i class="large green checkmark icon"></i>
                </td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
    )
}

export default ProjectContainer;