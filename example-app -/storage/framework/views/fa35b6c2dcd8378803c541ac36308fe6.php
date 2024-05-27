<!DOCTYPE html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>test</title>
  <!-- plugins:css -->
  <link rel="stylesheet" href="<?php echo e(asset('../vendors/feather/feather.css')); ?>">
  <link rel="stylesheet" href="<?php echo e(asset('../vendors/ti-icons/css/themify-icons.css')); ?>">
  <link rel="stylesheet" href="<?php echo e(asset('../vendors/css/vendor.bundle.base.css')); ?>">
  <!-- endinject -->
  <!-- Plugin css for this page -->
  <link rel="stylesheet" href="<?php echo e(asset('../vendors/datatables.net-bs4/dataTables.bootstrap4.css')); ?>">
  <link rel="stylesheet" href="<?php echo e(asset('../vendors/ti-icons/css/themify-icons.css')); ?>">
  <link rel="stylesheet" type="text/css" href="<?php echo e(asset('../js/select.dataTables.min.css')); ?>">
  <!-- End plugin css for this page -->
  <!-- inject:css -->
  <link rel="stylesheet" href="<?php echo e(asset('../css/vertical-layout-light/style.css')); ?>">
  <!-- endinject -->
  <link rel="shortcut icon" href="<?php echo e(asset('../images/favicon.png')); ?>" />
</head>
<body>
  <div class="container-scroller">
    <!-- partial:partials/_navbar.html -->
    <nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
        <a class="navbar-brand brand-logo mr-5" href="index.html"><img src="<?php echo e(asset('../images/logo-ITE.png')); ?>" width="150" height="150" class="mr-2" alt="logo"/></a>
      </div>
      <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end">
        <button class="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
          <span class="icon-menu"></span>
        </button>
        <ul class="navbar-nav mr-lg-2">
          <li class="nav-item nav-search d-none d-lg-block">
            <div class="input-group">
              <div class="input-group-prepend hover-cursor" id="navbar-search-icon">
                <span class="input-group-text" id="search">
                  <i class="icon-search"></i>
                </span>
              </div>
              <input type="text" class="form-control" id="navbar-search-input" placeholder="Search now" aria-label="search" aria-describedby="search">
            </div>
          </li>
        </ul>
        <ul class="navbar-nav navbar-nav-right">
          <li class="nav-item dropdown">
            <a class="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-toggle="dropdown">
              <i class="icon-bell mx-0"></i>
              <span class="count"></span>
            </a>
            <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
              <p class="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
              <a class="dropdown-item preview-item">
                <div class="preview-thumbnail">
                  <div class="preview-icon bg-success">
                    <i class="ti-info-alt mx-0"></i>
                  </div>
                </div>
                <div class="preview-item-content">
                  <h6 class="preview-subject font-weight-normal">Application Error</h6>
                  <p class="font-weight-light small-text mb-0 text-muted">
                    Just now
                  </p>
                </div>
              </a>
              <a class="dropdown-item preview-item">
                <div class="preview-thumbnail">
                  <div class="preview-icon bg-warning">
                    <i class="ti-settings mx-0"></i>
                  </div>
                </div>
                <div class="preview-item-content">
                  <h6 class="preview-subject font-weight-normal">Settings</h6>
                  <p class="font-weight-light small-text mb-0 text-muted">
                    Private message
                  </p>
                </div>
              </a>
              <a class="dropdown-item preview-item">
                <div class="preview-thumbnail">
                  <div class="preview-icon bg-info">
                    <i class="ti-user mx-0"></i>
                  </div>
                </div>
                <div class="preview-item-content">
                  <h6 class="preview-subject font-weight-normal">New user registration</h6>
                  <p class="font-weight-light small-text mb-0 text-muted">
                    2 days ago
                  </p>
                </div>
              </a>
            </div>
          </li>
          <li class="nav-item nav-profile dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
              <img src="images/faces/face28.jpg" alt="profile"/>
            </a>
            <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
              <a class="dropdown-item">
                <i class="ti-settings text-primary"></i>
                Settings
              </a>
              <a class="dropdown-item">
                <i class="ti-power-off text-primary"></i>
                Logout
              </a>
            </div>
          </li>
          <li class="nav-item nav-settings d-none d-lg-flex">
            <a class="nav-link" href="#">
              <i class="icon-ellipsis"></i>
            </a>
          </li>
        </ul>
        <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
          <span class="icon-menu"></span>
        </button>
      </div>
    </nav>

    <div class="container-fluid page-body-wrapper">
      <nav class="sidebar sidebar-offcanvas" id="sidebar">
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link" href="/index">
              <i class="icon-grid menu-icon"></i>
              <span class="menu-title">Dashboard</span>
            </a>
          </li>
        </ul>
      </nav>

      <div class="main-panel">
        <div class="content-wrapper">
          <?php echo $__env->yieldContent('content'); ?>
          <div class="card">
            <div class="card-body">
              <h2 class="card-title">متابعة المشروع</h2>
              <?php if(session()->has('success')): ?>
                  <div class="alert alert-success"><?php echo e(session()->get('success')); ?></div>
                  <?php echo e(session()->forget('success')); ?>

              <?php endif; ?>
              <div class="table-responsive">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>الطالب الأول</th>
                      <th>الطالب الثاني</th>
                      <th>الطالب الثالث</th>
                      <th>الطالب الرابع</th>
                      <th>الطالب الخامس</th>
                      <th>التقييم المرحلي</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                        <?php $__currentLoopData = $array; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $value): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                          <td>
                            <?php if($value === 'أحمر'): ?>
                              <div class="red"></div>
                            <?php elseif($value === 'أخضر'): ?>
                              <div class="green"></div>
                            <?php elseif($value === 'برتقالي'): ?>
                              <div class="orange"></div>
                            <?php else: ?>
                              <p><?php echo e($value); ?></p>
                            <?php endif; ?>
                          </td>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        <td>
                          <?php if($interim === 'أحمر'): ?>
                            <div class="red"></div>
                          <?php elseif($interim === 'أخضر'): ?>
                            <div class="green"></div>
                          <?php elseif($interim === 'برتقالي'): ?>
                            <div class="orange"></div>
                          <?php else: ?>
                            <p><?php echo e($interim); ?></p>
                          <?php endif; ?>
                        </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colspan="" style=" display: flex;
                                              align-items: center;
                                              justify-content: center;
                                              height: 100%;">
                        <?php if($predictions === 'dark red'): ?>
                          <div class="dark_red"></div>
                        <?php elseif($predictions === 'normal red'): ?>
                          <div class="red"></div>
                          <?php elseif($predictions === 'light red'): ?>
                          <div class="light_red"></div>
                        <?php elseif($predictions === 'light orange'): ?>
                          <div class="light_orange"></div>
                          <?php elseif($predictions === 'normal orange'): ?>
                          <div class="orange"></div>
                        <?php elseif($predictions === 'dark orange'): ?>
                          <div class="dark_orange"></div>
                          <?php elseif($predictions === 'light green'): ?>
                          <div class="light_green"></div>
                        <?php elseif($predictions === 'normal green'): ?>
                          <div class="green"></div>
                        <?php elseif($predictions === 'dark green'): ?>
                          <div class="dark_green"></div>
                        <?php else: ?>
                          <p><?php echo e($predictions); ?></p>
                        <?php endif; ?>
                      </td>
                      <td>
                        <h3 class="card-title">التقييم النهائي للمشروع :</h3>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <script src="<?php echo e(asset('../vendors/js/vendor.bundle.base.js')); ?>"></script>
  <script src="<?php echo e(asset('../js/template.js')); ?>"></script>
</body>
</html><?php /**PATH D:\study\project\example-app\resources\views/evaluationExpert.blade.php ENDPATH**/ ?>